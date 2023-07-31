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
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/business'>Business</Link>
                <Link to='/aboutus'>About Us</Link>
            </nav>
            <div className='DropDown'>
                <button className='ListButton'>
                    <FontAwesomeIcon className='Icons' icon={faListUl}/>
                </button>
                <div className='Menu'>
                    Menu
                </div>
            </div>
        </div>
    )
}