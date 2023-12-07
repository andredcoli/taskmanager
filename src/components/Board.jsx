import React, { useState } from 'react';
import List from './List';
import TopBar from './TopBar'; // Make sure to import TopBar

const Board = () => {
    const [lists, setLists] = useState([{ id: 1, title: 'List 1', cards: [] }]);

    // Function to add a new card to the list
    const onAddCard = (listId, cardTitle) => {
        setLists(lists.map(list => {
            if (list.id === listId) {
                const updatedCards = [...list.cards, { id: Date.now(), title: cardTitle }];
                return { ...list, cards: updatedCards };
            }
            return list;
        }));
    };

    // Add a function to delete the board
    const deleteBoard = () => {
        // Implement the logic to delete the board
        console.log('Board deleted');
        // Here you would typically handle the deletion logic such as updating state or making an API call
        // For now, we'll just log to the console
    };

    return (
        <div>
            {/* Include TopBar with the deleteBoard function */}
            <TopBar deleteBoard={deleteBoard} />

            {/* Map through each list and render it along with its cards */}
            {lists.map(list => (
                <List key={list.id} list={list} onAddCard={onAddCard} />
            ))}

            {/* Other board-related functionalities can be added here */}
        </div>
    );
};

export default Board;
