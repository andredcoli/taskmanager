import React, { useState } from 'react';
import Card from './Card';

const List = ({ list, onAddCard }) => {
  const [newCardTitle, setNewCardTitle] = useState('');
  const [isAddingCard, setIsAddingCard] = useState(false);

  const handleAddCard = () => {
    if (newCardTitle.trim()) {
      onAddCard(list.id, newCardTitle);
      setNewCardTitle('');
      setIsAddingCard(false);
    }
  };

  return (
    <div className="list">
      <h3>{list.title}</h3>
      {list.cards.map(card => <Card key={card.id} card={card} />)}

      {isAddingCard ? (
        <div>
          <input 
            type="text"
            className="add-card-input" 
            value={newCardTitle} 
            onChange={(e) => setNewCardTitle(e.target.value)} 
            placeholder="Enter card title"
          />
          <button 
            className="add-card-btn"
            onClick={handleAddCard}
          >
            Save Card
          </button>
        </div>
      ) : (
        <button 
          className="add-card-btn"
          onClick={() => setIsAddingCard(true)}
        >
          Add New Card
        </button>
      )}
    </div>
  );
};

export default List;
