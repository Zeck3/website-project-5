import React from 'react';
import coffee1 from '../ImageAssets/coffee1.png';
import coffee2 from '../ImageAssets/coffee2.png';
import coffee3 from '../ImageAssets/coffee3.png';
import coffee4 from '../ImageAssets/coffee4.png';


function EachSquare({image, title, label, price}) {
    return(
        <div className='Squares'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 0 12 13">
                <label>9$</label>
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
            <div className='InteractionMenu'>
                <div className='c'></div>
            </div>
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
                    title={'Brown Coffee with <3'}
                    label={"with Creamier Milk"}
                    price={"1.99$"}
                    />
                    <EachSquare 
                    image={coffee3} 
                    title={'Browner Coffee with <3'}
                    label={"Served in Orange"}
                    price={"2.99$"}
                    />
                    <EachSquare 
                    image={coffee4} 
                    title={'Americano Coffee'}
                    label={"American Blood Innit"}
                    price={"1.99$"}
                    />
                    <EachSquare 
                    image={coffee1} 
                    title={'Black Coffee'}
                    label={"Still Black"}
                    price={"2.99$"}
                    />
                    <EachSquare 
                    image={coffee4} 
                    title={'Another Coffee'}
                    label={"Don't mind the Coffee"}
                    price={"1.99$"}
                    />
                    <EachSquare 
                    image={coffee3} 
                    title={'Orange Coffee'}
                    label={"made for Orange People"}
                    price={"1.99$"}
                    />
                    <EachSquare 
                    image={coffee2} 
                    title={'Creamy Coffee'}
                    label={"Another Creamy Coffee"}
                    price={"2.99$"}
                    />
                    <EachSquare 
                    image={coffee1} 
                    title={'Last Coffee'}
                    label={"Your Last Coffee"}
                    price={"1.99$"}
                    />

                </div>
            </div>
        </div>
    )
}