// FavList.js
import React, { useContext } from 'react';
import { DataContext } from './DataContext';

function FavList() {
    const { fav, removeFavorite } = useContext(DataContext);

    const handleRemoveFavorite = (favName) => {
        removeFavorite(favName);
    };

    return (
        <div className="my-4">
            <h1 className="text-xl font-semibold">Favorites:</h1>
            {fav.length === 0 ? (
                <p>No favorites added yet.</p>
            ) : (
                fav.map((favItem, index) => (
                    <div key={index} className="flex justify-between p-2 mx-0 my-3 md:mx-64">
                        <h1 className="my-2 text-2xl font-semibold">{favItem}</h1>
                        <button
                            onClick={() => handleRemoveFavorite(favItem)}
                            className="p-2 text-right text-white bg-red-500"
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default FavList;
