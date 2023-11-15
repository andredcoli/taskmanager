import React, { useState } from 'react';
import Card from './Card'; 

const List = ({ list }) => {
  const [cards, setCards] = useState(list.cards);

  const addCard = () => {
    const newCard = { id: Date.now(), content: 'New Card' };
    setCards([...cards, newCard]);
  };

  return (
    <div>
      <h3>{list.title}</h3>
      <button onClick={addCard}>Add Card</button>
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default List;
