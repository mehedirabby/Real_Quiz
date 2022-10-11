import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='Header'>
            <h2><i>Real Quiz</i></h2>
            <div>
            <Link to='/'>Home</Link>
            <Link to='/statics'>Statics</Link>
            <Link to='/blogs'>Blogs</Link>
            </div>
        </nav>
    );
};

export default Header;