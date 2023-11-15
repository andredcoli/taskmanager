import React from 'react';
import Board from './components/Board';
import TopBar from './components/TopBar';
import './App.css';

function App() {
  const createNewBoard = () => {
    console.log('Create New Board');
  };

  const deleteBoard = () => {
    console.log('Delete Board');
  };

  return (
    <div className="App">
      <TopBar createNewBoard={createNewBoard} deleteBoard={deleteBoard} />
      <Board />
    </div>
  );
}

export default App;
