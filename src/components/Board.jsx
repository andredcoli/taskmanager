import React, { useState } from 'react';
import List from './List'; 

const Board = () => {
  const [lists, setLists] = useState([]);

  const addList = () => {
    const newList = { id: Date.now(), title: `List ${lists.length + 1}`, cards: [] };
    setLists([...lists, newList]);
  };

  const addCardToList = (listId) => {
    const newCard = { id: Date.now(), content: 'New Card' }; // Placeholder content
    setLists(lists.map(list => {
      if (list.id === listId) {
        return { ...list, cards: [...list.cards, newCard] };
      }
      return list;
    }));
  };

  return (
    <div className="board">
      {lists.map(list => (
        <List key={list.id} list={list} onAddCard={addCardToList} />
      ))}
      <button onClick={addList} className="add-list-btn">Add New List</button>
    </div>
  );
};

export default Board;
