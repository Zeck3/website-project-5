import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function Header() {

    const [something, setSomething] = useState(null)

    function handleClick() {
        if (something === null) {
            setSomething({display: 'flex'})
        } else {
            setSomething(null)
        }
    }
    
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
                <div className='ShoppingCart'>
                    <button>
                        <FontAwesomeIcon className='Icons' icon={faShoppingCart}/>
                    </button>
                </div>
            </nav>
            <div className='DropDown'>
                <button className='ListButton' onClick={handleClick}>
                    <FontAwesomeIcon className='Icons' icon={faListUl}/>
                </button>
            </div>
            <div className='Menu' style={something}>
                <nav className='NavigationBar2'>
                    <Link to='/'>Home</Link>
                    <Link to='/products'>Products</Link>
                    <Link to='/business'>Business</Link>
                    <Link to='/aboutus'>About Us</Link>
                    <div className='ShoppingCart'>
                        <button>
                            <FontAwesomeIcon className='Icons' icon={faShoppingCart}/>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    )
}