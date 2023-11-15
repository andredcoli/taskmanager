// Board.js
import React, { useState } from 'react';
import List from './List'; 

const Board = () => {
  const [lists, setLists] = useState([]);

  const addList = () => {
    const newList = { id: Date.now(), title: 'New List', cards: [] };
    setLists([...lists, newList]);
  };

  return (
    <div className="board">
      <button className="add-list-btn" onClick={addList}>Add New List</button>
      {lists.map(list => (
        <List key={list.id} list={list} />
      ))}
    </div>
    
  );
};


export default Board;
