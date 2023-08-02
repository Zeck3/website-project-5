import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return(
        <div className='HeaderSection'>
            <div className='Logo'>
                <h2>BARAKO</h2>
                <h3>Café</h3>
            </div>
            <nav className='NavigationBar'>
                <Link to='/home'>Home</Link>
                <Link to='/'>Products</Link>
                <Link to='/business'>Business</Link>
                <Link to='/aboutus'>About Us</Link>
            </nav>
            <div className='DropDown'>
                <button className='ListButton'>
                    <FontAwesomeIcon className='Icons' icon={faListUl}/>
                </button>
            </div>
            <div className='Menu'>
                <nav className='NavigationBar2'>
                    <Link to='/home'>Home</Link>
                    <Link to='/'>Products</Link>
                    <Link to='/business'>Business</Link>
                    <Link to='/aboutus'>About Us</Link>
                </nav>
            </div>
        </div>
    )
}