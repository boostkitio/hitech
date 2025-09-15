import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient'; // Adjusted path if necessary

interface PopupConfig {
  id: string;
  name: string; // name is kept for potential future use, though not directly displayed by IndividualPopup
  content: string;
  delay_seconds: number; // Updated to snake_case
  is_active: boolean;    // Updated to snake_case
  // user_id and created_at are not strictly needed for display but exist in Supabase table
}

interface IndividualPopupProps {
  id: string;
  content: string;
  // name is not used in the display of IndividualPopup, only in admin
  // delaySeconds is used by the controller, not directly by IndividualPopup
  onClose: (id: string) => void;
}

const IndividualPopup: React.FC<IndividualPopupProps> = ({ id, content, onClose }) => {
  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        zIndex: 1000, // Ensure it's above other content
        maxWidth: '350px',
      }}
    >
      <button 
        onClick={() => onClose(id)} 
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'transparent',
          border: 'none',
          fontSize: '1.2rem',
          cursor: 'pointer',
          color: '#555'
        }}
      >
        &times;
      </button>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

const PopupDisplayController: React.FC = () => {
  const [activePopups, setActivePopups] = useState<PopupConfig[]>([]);
  const [visiblePopups, setVisiblePopups] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchActivePopups = async () => {
      try {
        // Check if Supabase is properly configured
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

        if (!supabaseUrl || !supabaseKey) {
          // Silently skip if Supabase is not configured
          setActivePopups([]);
          return;
        }

        const { data, error } = await supabase
          .from('popups')
          .select('*')
          .eq('is_active', true);

        if (error) {
          // Only log error in development, not production
          if (import.meta.env.DEV) {
            console.warn('Popup service unavailable:', error.message);
          }
          setActivePopups([]);
          return;
        }
        setActivePopups(data || []);
      } catch (err) {
        // Silently fail - popups are not critical functionality
        if (import.meta.env.DEV) {
          console.warn('Popup service unavailable');
        }
        setActivePopups([]);
      }
    };

    fetchActivePopups();
    // Supabase real-time subscriptions could be used here for live updates if desired
  }, []);

  useEffect(() => {
    const timers: number[] = [];

    activePopups.forEach(popup => {
      if (!visiblePopups.has(popup.id)) {
        const timer = setTimeout(() => {
          setVisiblePopups(prev => new Set(prev).add(popup.id));
        }, popup.delay_seconds * 1000); // Updated to use delay_seconds
        timers.push(timer);
      }
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [activePopups, visiblePopups]);

  const handleClosePopup = (id: string) => {
    setVisiblePopups(prev => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
    // Optional: Mark as seen for the session to not show again
    // sessionStorage.setItem(`popup_seen_${id}`, 'true');
  };

  return (
    <>
      {activePopups
        .filter(popup => visiblePopups.has(popup.id))
        .map(popup => (
          <IndividualPopup key={popup.id} id={popup.id} content={popup.content} onClose={handleClosePopup} />
      ))}
    </>
  );
};

export default PopupDisplayController;
