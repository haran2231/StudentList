// StudentList.js
import React, { useContext } from "react";
import { DataContext } from "./DataContext";

function StudentList() {
    const { fav, addFavorite } = useContext(DataContext);

    const names = [
        { name: 'Hari', id: 1 },
        { name: 'Karthi', id: 2 },
        { name: 'Haran', id: 3 },
        { name: 'Sudhan', id: 4 },
    ];

    const handleAddFavorite = (favName) => {
        addFavorite(favName);
    };

    const isFavorite = (name) => fav.includes(name);

    return (
        <div className="p-4">
            {names.map((item) => (
                <div key={item.id} className="flex justify-between p-2 mx-0 my-3 md:mx-64">
                    <h1 className="my-2 text-2xl font-semibold">{item.name}</h1>
                    <button 
                        onClick={() => handleAddFavorite(item.name)} 
                        className={`p-2 text-right text-white ${isFavorite(item.name) ? 'bg-gray-500' : 'bg-black'}`}
                        disabled={isFavorite(item.name)}
                    >
                        {isFavorite(item.name) ? 'Added' : 'Add to fav'}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default StudentList;
