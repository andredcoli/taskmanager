// CardDetailsModal.js
import React from 'react';


const CardDetailsModal = ({
  isOpen,
  onClose,
  description,
  setDescription,
  deadline,
  setDeadline,
  onSave
}) => {
  if (!isOpen) return null;

  const handleSave = () => {
    onSave(); // Call the onSave function passed in props
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Card Details</h2>
        <textarea
          className="card-description"
          value={description} // Use description from props
          onChange={(e) => setDescription(e.target.value)} // Use setDescription from props
          placeholder="Enter card description..."
        />
        <input
          type="date"
          className="card-deadline"
          value={deadline} // Use deadline from props
          onChange={(e) => setDeadline(e.target.value)} // Use setDeadline from props
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CardDetailsModal;

