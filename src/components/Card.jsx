// Card.js
import React, { useState } from 'react';
import CardDetailsModal from './CardDetailsModal';


const Card = ({ cardData }) => {
  // Check if cardData exists, otherwise set it to an empty object
  const validatedCardData = cardData || {};

  // Now we can safely use validatedCardData, knowing it won't be undefined
  const [isModalOpen, setModalOpen] = useState(false);
  const [description, setDescription] = useState(validatedCardData.description || "");
  const [deadline, setDeadline] = useState(validatedCardData.deadline || "");

  const handleSave = () => {
    // Here you would handle saving the details to cardData or state
    console.log('Saving card details', { description, deadline });
    // After saving you might want to update the cardData or inform the parent component
    setModalOpen(false);
  };

  return (
    // Add 'card' class to this div
    <div className="card" onClick={() => setModalOpen(true)}>
      <p>{validatedCardData.title || "No Title"}</p>
      <CardDetailsModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        description={description} // Pass description as a prop
        setDescription={setDescription} // Pass setDescription as a prop
        deadline={deadline} // Pass deadline as a prop
        setDeadline={setDeadline} // Pass setDeadline as a prop
        onSave={handleSave}
      />
    </div>
  );
};

export default Card;
