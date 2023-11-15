
import React from 'react';

const TopBar = ({ createNewBoard, deleteBoard }) => {
  return (
    <div className="app-top-bar">
      <h1 className="app-title">Your Kanban Board</h1>
      <div className="board-controls">
        <button className="board-btn new-board-btn" onClick={createNewBoard}>Create New Board</button>
        <button className="board-btn delete-board-btn" onClick={deleteBoard}>Delete Board</button>
      </div>
    </div>
  );
};

export default TopBar;
