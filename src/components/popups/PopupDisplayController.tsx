import React, { useEffect, useMemo, useState } from 'react';
import promotionsData from '../../data/promotions.json';

interface PopupConfig {
  id: string;
  name: string;
  content: string;
  delaySeconds: number;
  isActive: boolean;
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
  const activePopups = useMemo<PopupConfig[]>(
    () => promotionsData.promotions.filter((popup) => popup.isActive),
    []
  );
  const [visiblePopups, setVisiblePopups] = useState<Set<string>>(new Set());

  useEffect(() => {
    const timers: number[] = [];

    activePopups
      .filter((popup) => !visiblePopups.has(popup.id))
      .forEach((popup) => {
        const timer = window.setTimeout(() => {
          setVisiblePopups((prev) => {
            const next = new Set(prev);
            next.add(popup.id);
            return next;
          });
        }, (popup.delaySeconds ?? 0) * 1000);
        timers.push(timer);
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
