import React from 'react';
import logo from '../images/list-icon.svg';
import '../styles/index.css';
import '../styles/App.css';

const Header = () => {
    return (
    <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p className='App-header-text'>
         SPLAT Tasks
        </p>
    </header>
    );
}

export default Header;