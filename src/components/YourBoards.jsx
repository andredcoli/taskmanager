import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const YourBoards = ({ onLogout }) => {
    const [boards, setBoards] = useState([]);
    const [newBoardTitle, setNewBoardTitle] = useState("");
    const navigate = useNavigate();

    const handleCreateBoard = () => {
        console.log("Creating a new board with title:", newBoardTitle);
        if (newBoardTitle && boards.length < 5) {
          const newBoards = [...boards, { id: Date.now().toString(), title: newBoardTitle }];
          setBoards(newBoards);
          setNewBoardTitle("");
          console.log("New boards array:", newBoards);
        }
      };

    const onBoardClick = (boardId) => {
        navigate(`/board/${boardId}`); // Correct usage of navigate
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
                  <Draggable key={board.id} draggableId={board.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="board-bar"
                        onClick={() => onBoardClick(board.id)}
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
          <div className="create-board-section">
            <input 
              type="text" 
              className="create-board-input"
              value={newBoardTitle}
              onChange={(e) => setNewBoardTitle(e.target.value)}
              placeholder="Enter board name" 
            />
            <button onClick={handleCreateBoard} className="create-board-btn">
              Create New Board
            </button>
          </div>
          {boards.length === 0 && (
            <p className="no-boards">You currently have no boards</p>
          )}
          {boards.length >= 5 && (
            <p className="max-boards-msg">You have reached the maximum amount of boards</p>
          )}
        </DragDropContext>
      );
          }
          
    

export default YourBoards;
