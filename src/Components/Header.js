import React from 'react';

export default function Header() {
    return(
        <div id='HeaderDiv'>
            <div className='NavigationBar'>
                <div className='Links'>
                    <a href='#HOME'>Home</a>
                </div>
                <div className='Links'>
                    <a href='#PRODUCTS'>Products</a>
                </div>
            </div>
            <div id='Logo'>
                <h2 className='LogoTexts'>BARAKO</h2>
                <h3 className='LogoTexts'>Café</h3>
            </div>
            <div className='NavigationBar'>
                <div className='Links'>
                    <a href='#BUSINESS'>Business</a>
                </div>
                <div className='Links'>
                    <a href='#ABOUTUS'>About Us</a>
                </div>
            </div>
        </div>
    )
}