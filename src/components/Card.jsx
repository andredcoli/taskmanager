import React, { useState } from 'react';

const Card = ({ card }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [description, setDescription] = useState(card.description || '');
  const [deadline, setDeadline] = useState(card.deadline || '');

  const handleSaveDetails = () => {
    // Logic to save description and deadline
    setShowDetails(false);
    // Note: Implement the logic to actually save these details in your state
  };

  return (
    <div className="card">
      <p onClick={() => setShowDetails(true)}>{card.title}</p>
      {showDetails && (
        <div className="card-details">
          <textarea 
            className="card-description"
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            placeholder="Add a description"
          />
          <input 
            type="date" 
            className="card-deadline"
            value={deadline} 
            onChange={(e) => setDeadline(e.target.value)}
          />
          <button onClick={handleSaveDetails}>Save</button>
        </div>
      )}
    </div>
  );
};

export default Card;
