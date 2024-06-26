import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="p-4 bg-slate-500">
            <ul className="flex gap-4 underline justify-items-start">
                <li><Link to="/">Student List</Link></li>
                <li><Link to="/favorites">Favorite Students</Link></li>
            </ul>
        </div>
    );
}

export default Header;
