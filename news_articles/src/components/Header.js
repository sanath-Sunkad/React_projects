import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div><Link to="/">DaylyNews</Link></div>
        </header>
    );
};

export default Header;