import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const YourBoards = ({ onLogout }) => {
    const [boards, setBoards] = useState([]);
    const [newBoardTitle, setNewBoardTitle] = useState("");

    const handleCreateBoard = () => {
        if (newBoardTitle && boards.length < 5) {
            setBoards([...boards, { id: Date.now(), title: newBoardTitle }]);
            setNewBoardTitle(""); // Reset input field
        }
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(boards);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setBoards(items);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="top-bar">
                <h1>Your Boards</h1>
                <button onClick={onLogout} className="logout-btn">Logout</button>
            </div>
            <Droppable droppableId="boards">
                {(provided) => (
                    <div
                        className="boards-container"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {boards.map((board, index) => (
                            <Draggable key={board.id} draggableId={board.id.toString()} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className="board-bar"
                                    >
                                        {board.title}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
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
        </DragDropContext>
    );
};

export default YourBoards;
