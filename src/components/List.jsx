import React from 'react';
import Card from './Card'; // Import your Card component

const List = ({ list, onAddCard }) => {
  return (
    <div className="list">
      <h3>{list.title}</h3>
      {/* Render cards here */}
      {list.cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
      <button onClick={() => onAddCard(list.id)}>Add New Card</button>
    </div>
  );
};

export default List;
