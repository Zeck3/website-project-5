import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../ImageAssets/Logo.png';

export default function Header() {
    return(
        <div className='HeaderSection'>
            <div className='Logo'>
                <img src={Logo} alt='Coffee Logo'></img>
                <h2>BARAKO</h2>
                <h3>Café</h3>
            </div>
            <nav className='NavigationBar'>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/business'>Business</Link>
                <Link to='/aboutus'>About Us</Link>
            </nav>
        </div>
    );
}