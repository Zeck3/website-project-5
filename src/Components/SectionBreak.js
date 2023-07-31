import React from 'react';
import Gallery1 from '../ImageAssets/gallery-pexels-bacho-nadiradze-7541876.jpg';
import Gallery2 from '../ImageAssets/gallery-pexels-juan-pablo-serrano-arenas-894695.jpg';
import Gallery3 from '../ImageAssets/gallery-pexels-gül-işık-2128109-cropped.jpg';

function RowFunction({image, heading, info}) {
    return(
        <div className='Row'>
            <div className='Column'>
                <img src={image} alt='idk related about coffee'/>
            </div>
            <div className='Column'>
                <h3>{heading}</h3>
                <p>{info}</p>
            </div>
        </div>

    )
}

function RowRightFunction({image, heading, info}) {
    return(
        <div className='RowRight'>
            <div className='Column'>
                <h3>{heading}</h3>
                <p>{info}</p>
            </div>
            <div className='Column'>
                <img src={image} alt='idk related about coffee'/>
            </div>
        </div>

    )
}

export default function SectionBreak() {
    return(
        <div className='SectionBreakDiv'>
            <div className='Container'>
                <RowFunction 
                image={Gallery1}
                heading={"Packed with Elegance"}
                info={"We apply food safety and security to our packages making sure aroma is preserved. We also provide different sizes for your needs!"}
                />
                <RowRightFunction
                image={Gallery2}
                heading={"Brewed to Perfection"}
                info={"our state of the art machinery does the work of brewing high quality coffee! Preserved strong flavors from coffee beans had been finely crushed."}
                />
                <RowFunction 
                image={Gallery3}
                heading={"Served with Love"}
                info={"We will get your coffee on your table with aesthetic and elegance! That's how we serve our coffee, with love, for our customers!"}
                />
         
            </div>
        </div>
    )
}