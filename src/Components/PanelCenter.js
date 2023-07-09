import React from 'react';
import CoffeeTable from '../ImageAssets/pexels-viktoria-alipatova-2074130.jpg';

export default function PanelCenter() {
    return(
        <div className='PanelCenterDiv'>
            <div className='Container'>
                <div className='Column1'>
                    <img src={CoffeeTable} alt='Coffee Table with People'></img>
                </div>
                <div className='Column2'>
                    <h2>Menu</h2>
                    <p>Choose your coffee, we have variarities available! 
                    Espresso, Cappuccino, Latte, Americano, Instant Coffees, 
                    and our special Barako Coffee!</p>
                    <button >Show More</button>
                </div>
            </div>
        </div>
    )
}