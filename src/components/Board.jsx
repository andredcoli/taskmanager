import React, { useState } from 'react';
import List from './List'; 

const Board = () => {
  const [lists, setLists] = useState([]);
  const [isAddingList, setIsAddingList] = useState(false); // New state to track adding list mode
  const [newListTitle, setNewListTitle] = useState("");

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
  //

  const handleAddList = () => {
    if (newListTitle.trim()) { // Check if the title is not just empty spaces
      const newList = { id: Date.now(), title: newListTitle, cards: [] };
      setLists([...lists, newList]);
      setNewListTitle("");
    }
    setIsAddingList(false); // Reset back to not adding list mode
  };
  

  return (
    <div className="board">
      {lists.map(list => (
        <List key={list.id} list={list} onAddCard={addCardToList} />
      ))}
  
      {isAddingList ? (
        <div>
          <input
            type="text"
            className="list-input" // Apply the class for styling
            value={newListTitle}
            onChange={(e) => setNewListTitle(e.target.value)}
            placeholder="Enter list name"
          />
          <button 
            className="add-list-confirm-btn" // Apply the class for styling
            onClick={handleAddList}
          >
            Add List
          </button>
        </div>
      ) : (
        <button 
          onClick={() => setIsAddingList(true)} 
          className="add-list-btn"
        >
          Add New List
        </button>
      )}
    </div>
  );
      }  
  

export default Board;
