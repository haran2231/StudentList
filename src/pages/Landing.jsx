// Landing.js
import React from 'react';
import Header from '../components/Header';
import StudentList from '../components/StudentList';
import FavList from '../components/FavList';
import { DataProvider } from '../components/DataContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Landing() {
    return (
        <Router>
            <DataProvider>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/" element={<StudentList />} />
                        <Route path="/favorites" element={<FavList />} />
                    </Routes>
                </div>
            </DataProvider>
        </Router>
    );
}

export default Landing;
