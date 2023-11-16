import React, { useState } from 'react';

const YourBoards = ({ onLogout }) => {
    const [boards, setBoards] = useState([]);
    const [newBoardTitle, setNewBoardTitle] = useState("");

    const handleCreateBoard = () => {
        if (newBoardTitle && boards.length < 5) {
            setBoards([...boards, { id: Date.now(), title: newBoardTitle }]);
            setNewBoardTitle(""); // Reset input field
        }
    };

    return (
        <div>
            <div className="top-bar">
                <h1>Your Boards</h1>
                <button onClick={onLogout} className="logout-btn">Logout</button>
            </div>
            <div className="boards-container">
                {boards.map(board => (
                    <div key={board.id} className="board-bar">
                        {board.title}
                    </div>
                ))}
                {boards.length < 5 && (
                    <div className="create-board-section">
                        <input 
                            type="text" 
                            className="create-board-input"
                            value={newBoardTitle}
                            onChange={(e) => setNewBoardTitle(e.target.value)}
                            placeholder="Enter board name" 
                        />
                        <button 
                            onClick={handleCreateBoard}
                            className="create-board-btn"
                        >
                            Create new board
                        </button>
                    </div>
                )}
                {boards.length === 0 && <p className="no-boards">You currently have no boards</p>}
            </div>
        </div>
    );
};

export default YourBoards;
