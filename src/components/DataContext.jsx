// DataContext.js
import React, { createContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [fav, setFav] = useState([]);

    const addFavorite = (favName) => {
        if (!fav.includes(favName)) {
            setFav([...fav, favName]);
        }
    };

    const removeFavorite = (favName) => {
        setFav(fav.filter(name => name !== favName));
    };

    return (
        <DataContext.Provider value={{ fav, addFavorite, removeFavorite }}>
            {children}
        </DataContext.Provider>
    );
};

export {DataContext, DataProvider};