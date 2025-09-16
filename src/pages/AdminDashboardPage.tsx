import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../contexts/AuthContext';

// Interface matches Supabase table structure (excluding user_id, created_at for simplicity here)
// Supabase client will handle types from DB schema if set up with `supabase gen types typescript`
interface PopupConfig {
  id: string; // uuid from Supabase
  name: string;
  content: string;
  delay_seconds: number; // Note: Supabase uses snake_case by default for columns
  is_active: boolean;
  user_id?: string; // Will be set on creation, useful for RLS
  created_at?: string;
}

const DEFAULT_POPUP_CONTENT = '<p>Your <strong>special</strong> offer here!</p>';
const DEFAULT_POPUP_DELAY = 5;

const AdminDashboardPage: React.FC = () => {
  const { user } = useAuth();
  const [popups, setPopups] = useState<PopupConfig[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(true); // For fetching popups
  const [isSubmitting, setIsSubmitting] = useState(false); // For form submissions/actions
  const [error, setError] = useState<string | null>(null);

  const [showForm, setShowForm] = useState(false);
  const [editingPopup, setEditingPopup] = useState<PopupConfig | null>(null);

  // Form state
  const [formName, setFormName] = useState('');
  const [formContent, setFormContent] = useState(DEFAULT_POPUP_CONTENT);
  const [formDelay, setFormDelay] = useState(DEFAULT_POPUP_DELAY);

  const fetchPopups = useCallback(async () => {
    if (!user) return;
    setIsLoadingData(true);
    setError(null);
    try {
      const { data, error: fetchError } = await supabase
        .from('popups')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;
      setPopups(data || []);
    } catch (err) {
      console.error('Error fetching popups:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch popups.';
      setError(errorMessage);
    }
    setIsLoadingData(false);
  }, [user]);

  useEffect(() => {
    fetchPopups();
  }, [fetchPopups]);

  const resetForm = () => {
    setFormName('');
    setFormContent(DEFAULT_POPUP_CONTENT);
    setFormDelay(DEFAULT_POPUP_DELAY);
    setEditingPopup(null);
    setError(null); // Clear errors when form is reset
  };

  const handleShowCreateForm = () => {
    resetForm();
    setShowForm(true);
  };

  const handleEditPopup = (popup: PopupConfig) => {
    setEditingPopup(popup);
    setFormName(popup.name);
    setFormContent(popup.content);
    setFormDelay(popup.delay_seconds);
    setShowForm(true);
    setError(null); // Clear errors when opening edit form
  };

  const handleCancelForm = () => {
    setShowForm(false);
    resetForm();
  };

  const handleSavePopup = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!formName.trim() || !formContent.trim()) {
      alert('Popup name and content cannot be empty.');
      return;
    }
    if (!user) {
      alert('You must be logged in to save popups.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const popupData = {
      name: formName,
      content: formContent,
      delay_seconds: formDelay,
      user_id: user.id,
    };

    try {
      if (editingPopup) {
        const { error: updateError } = await supabase
          .from('popups')
          .update({ ...popupData, is_active: editingPopup.is_active })
          .eq('id', editingPopup.id)
          .eq('user_id', user.id);
        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase
          .from('popups')
          .insert([{ ...popupData, is_active: false }]);
        if (insertError) throw insertError;
      }
      setShowForm(false);
      resetForm();
      await fetchPopups();
    } catch (err) {
      console.error('Error saving popup:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to save popup.';
      setError(errorMessage);
    }
    setIsSubmitting(false);
  };

  const togglePopupActive = async (popup: PopupConfig) => {
    if (!user) return;
    setIsSubmitting(true);
    setError(null);
    try {
      const { error: updateError } = await supabase
        .from('popups')
        .update({ is_active: !popup.is_active })
        .eq('id', popup.id)
        .eq('user_id', user.id);
      if (updateError) throw updateError;
      await fetchPopups();
    } catch (err) {
      console.error('Error toggling popup status:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to update popup status.';
      setError(errorMessage);
    }
    setIsSubmitting(false);
  };

  const deletePopup = async (id: string) => {
    if (!user) return;
    if (window.confirm('Are you sure you want to delete this popup?')) {
      setIsSubmitting(true);
      setError(null);
      try {
        const { error: deleteError } = await supabase
          .from('popups')
          .delete()
          .eq('id', id)
          .eq('user_id', user.id);
        if (deleteError) throw deleteError;
        
        if (editingPopup && editingPopup.id === id) {
          handleCancelForm(); 
        }
        await fetchPopups();
      } catch (err) {
        console.error('Error deleting popup:', err);
        const errorMessage = err instanceof Error ? err.message : 'Failed to delete popup.';
        setError(errorMessage);
      }
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard - Popup Management</h1>

      <div className="mb-8">
        {!showForm && (
            <button 
                onClick={handleShowCreateForm}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300"
                disabled={isSubmitting || isLoadingData}
            >
                {isLoadingData ? 'Loading...' : '+ Create New Popup'}
            </button>
        )}
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
          <button onClick={() => setError(null)} className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <span className="text-2xl">&times;</span>
          </button>
        </div>
      )}

      {showForm && (
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {editingPopup ? 'Edit Popup' : 'Create New Popup'}
            </h2>
            <form onSubmit={handleSavePopup} className="space-y-4">
              <div>
                <label htmlFor="popupName" className="block text-sm font-medium text-gray-700">Popup Name (for Admin)</label>
                <input 
                  type="text" 
                  id="popupName" 
                  value={formName} 
                  onChange={(e) => setFormName(e.target.value)} 
                  required
                  disabled={isSubmitting}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:bg-gray-50"
                  placeholder="e.g., Summer Sale Offer"
                />
              </div>
              <div>
                <label htmlFor="popupContent" className="block text-sm font-medium text-gray-700">Popup Content (HTML allowed)</label>
                <textarea 
                  id="popupContent" 
                  value={formContent} 
                  onChange={(e) => setFormContent(e.target.value)} 
                  rows={6}
                  required
                  disabled={isSubmitting}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:bg-gray-50"
                  placeholder="<h1>Special Offer!</h1><p>Get 20% off today.</p>"
                />
              </div>
              <div>
                <label htmlFor="popupDelay" className="block text-sm font-medium text-gray-700">Delay (seconds)</label>
                <input 
                  type="number" 
                  id="popupDelay" 
                  value={formDelay} 
                  onChange={(e) => setFormDelay(parseInt(e.target.value, 10) || 0)} 
                  min="0"
                  required
                  disabled={isSubmitting}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:bg-gray-50"
                />
              </div>
              <div className="flex justify-between items-center">
                <button 
                  type="button"
                  onClick={handleCancelForm}
                  disabled={isSubmitting}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 disabled:bg-gray-100"
                >
                    Cancel
                </button>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`${editingPopup ? 'bg-blue-500 hover:bg-blue-600' : 'bg-green-500 hover:bg-green-600'} text-white font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${editingPopup ? 'focus:ring-blue-500' : 'focus:ring-green-500'} disabled:bg-gray-400`}
                >
                  {isSubmitting ? (editingPopup ? 'Saving...' : 'Adding...') : (editingPopup ? 'Save Changes' : 'Add Popup')}
                </button>
              </div>
            </form>
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Live Preview</h3>
            <div 
              style={{
                position: 'relative',
                backgroundColor: 'white',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                minHeight: '200px',
                maxWidth: '350px',
                margin: '0 auto'
              }}
            >
              <button 
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'transparent',
                  border: 'none',
                  fontSize: '1.2rem',
                  color: '#555',
                  cursor: 'default'
                }}
              >
                &times;
              </button>
              {formContent ? (
                <div dangerouslySetInnerHTML={{ __html: formContent }} />
              ) : (
                <p className="text-gray-400 italic">Enter content to see a preview...</p>
              )}
            </div>
          </div>
        </div>
      )}

      {isLoadingData && popups.length === 0 && !showForm && (
        <p className="text-gray-500 text-center py-4">Loading popups...</p>
      )}

      {!isLoadingData && !error && popups.length === 0 && !showForm && (
         <p className="text-gray-500">No popups created yet. Click '+ Create New Popup' to get started.</p>
      )}

      {popups.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Existing Popups</h2>
          <ul className="space-y-4">
            {popups.map((popup) => (
              <li key={popup.id} className="p-4 border border-gray-200 rounded-md shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="flex-grow mb-3 sm:mb-0">
                  <h3 className="text-lg font-medium text-gray-800">{popup.name}</h3>
                  <p className="text-sm text-gray-500">Delay: {popup.delay_seconds}s</p>
                  <div className="mt-1 text-xs text-gray-400">Content Preview: <code className='bg-gray-100 p-1 rounded text-gray-600'>{popup.content.substring(0,50)}{popup.content.length > 50 ? '...' : ''}</code></div>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <button
                    onClick={() => handleEditPopup(popup)}
                    disabled={isSubmitting || isLoadingData}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-1 px-3 rounded-md text-xs shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 disabled:bg-yellow-200"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => togglePopupActive(popup)} // Corrected: pass popup object
                    disabled={isSubmitting || isLoadingData}
                    className={`py-1 px-3 rounded-md text-xs font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 
                                ${popup.is_active ? 'bg-red-100 text-red-700 hover:bg-red-200 focus:ring-red-500' 
                                                  : 'bg-green-100 text-green-700 hover:bg-green-200 focus:ring-green-500'} 
                                disabled:opacity-50`}
                  >
                    {popup.is_active ? 'Deactivate' : 'Activate'} {/* Corrected: use popup.is_active */}
                  </button>
                  <button 
                    onClick={() => deletePopup(popup.id)}
                    disabled={isSubmitting || isLoadingData}
                    className="text-red-500 hover:text-red-700 focus:outline-none p-1 disabled:text-red-200"
                    title="Delete Popup"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminDashboardPage;
