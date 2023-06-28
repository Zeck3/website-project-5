import React from 'react';

function NavigationBar() {
    return(
        <div id='NavBar'>
            <div className='Row'>
                <div className='Columns'>
                    <a href='#HOME'>Home</a>
                </div>
                <div className='Columns'>
                    <a href='#PRODUCTS'>Products</a>
                </div>
            </div>
            <div id='Logo'>
                <h2 className='LogoTexts' id='Barako'>BARAKO</h2>
                <h3 className='LogoTexts' id='Cafe'>Café</h3>
            </div>
            <div className='Row'>
                <div className='Columns'>
                    <a href='#BUSINESS'>Business</a>
                </div>
                <div className='Columns'>
                    <a href='#ABOUTUS'>About Us</a>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;