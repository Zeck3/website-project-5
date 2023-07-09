import React from 'react';
import CoffeeCircle from '../ImageAssets/nathan-dumlao-pMW4jzELQCw-unsplash.jpg';

export default function PanelLeft() {
    return(
        <div className='PanelLeftDiv'>
            <div className='Container'>
                <div className='Column1'>
                    <img src={CoffeeCircle} alt='Coffee in a Circle'></img>
                </div>
                <div className='Column2'>
                    <h2>Menu</h2>
                    <p>Choose your coffee, we have variarities available! 
                    Espresso, Cappuccino, Latte, Americano, Instant Coffees, 
                    and our special Barako Coffee!</p>
                    <button >SHOW MORE</button>
                </div>
            </div>
        </div>
    )
}