import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import coffee1 from '../ImageAssets/coffee1.png';
import coffee2 from '../ImageAssets/coffee2.png';
import coffee3 from '../ImageAssets/coffee3.png';
import coffee4 from '../ImageAssets/coffee4.png';


function EachSquare({image, title, label, price}) {
    return(
        <div className='Squares'>
            <span>
                <FontAwesomeIcon className='Icons' icon={faCartShopping} />
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 0 12 13">
                <path d="M -2 0 L 5 0 L 10 6 L 10 13 L 10 13 L 10 13 L -2 0 L -2 0 Z" fill="#000000"/>
            </svg>
            <img src={image} alt='coffee' />
            <h3>{title}</h3>
            <label>{label}</label>
            <label className='Price'>{price}</label>
        </div>
    )
}

export default function ProductsSection() {
    return(
        <div className='ProductsSectionDiv'>
            <div className='Container'>
                <div className='SquaresSection'>
                    <EachSquare 
                    image={coffee1} 
                    title={'Barako Coffee'}
                    label={"with the Strongest Aroma"}
                    price={"1.99$"}
                    />
                    <EachSquare 
                    image={coffee2} 
                    title={'Creamy Latte'}
                    label={"with Creamier Milk"}
                    price={"2.99$"}
                    />
                    <EachSquare 
                    image={coffee3} 
                    title={'Orange Coffee'}
                    label={"Served in Orange"}
                    price={"2.99$"}
                    />
                    <EachSquare 
                    image={coffee4} 
                    title={'Flat White'}
                    label={"with flat cream"}
                    price={"1.99$"}
                    />
                    <EachSquare 
                    image={coffee1} 
                    title={'Barako Coffee'}
                    label={"with the Strongest Aroma"}
                    price={"1.99$"}
                    />
                    <EachSquare 
                    image={coffee4} 
                    title={'Flat White'}
                    label={"with flat cream"}
                    price={"1.99$"}
                    />
                    <EachSquare 
                    image={coffee3} 
                    title={'Orange Coffee'}
                    label={"Served in Orange"}
                    price={"2.99$"}
                    />
                    <EachSquare 
                    image={coffee2} 
                    title={'Creamy Latte'}
                    label={"with Creamier Milk"}
                    price={"2.99$"}
                    />
                    <EachSquare 
                    image={coffee1} 
                    title={'Barako Coffee'}
                    label={"with the Strongest Aroma"}
                    price={"1.99$"}
                    />

                </div>
            </div>
        </div>
    )
}