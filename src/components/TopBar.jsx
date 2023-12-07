import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TopBar = ({ deleteBoard }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    setShowDeleteModal(true); // Show the modal
  };

  const confirmDelete = () => {
    deleteBoard(); // Call the function to delete the board
    setShowDeleteModal(false); // Hide the modal
    navigate('/your-boards'); // Navigate to Your Boards page
  };

  const cancelDelete = () => {
    setShowDeleteModal(false); // Hide the modal
  };

  const goToYourBoards = () => {
    navigate('/your-boards'); // Navigate to Your Boards page
  };

  return (
    <div className="app-top-bar">
      <h1 className="app-title">Your Kanban Board</h1>
      <div className="board-controls">
        <button className="board-btn" onClick={goToYourBoards}>
          Your Boards
        </button>
        <button className="board-btn delete-board-btn" onClick={handleDeleteClick}>
          Delete Board
        </button>
      </div>

      {showDeleteModal && (
  <div className="delete-modal">
    <p>Are you sure you want to delete this board?</p>
    <div className="delete-modal-buttons">
      <button className="delete-modal-button yes" onClick={confirmDelete}>Yes</button>
      <button className="delete-modal-button no" onClick={cancelDelete}>No</button>
    </div>
  </div>
      )}
    </div>
  );
};

export default TopBar;
