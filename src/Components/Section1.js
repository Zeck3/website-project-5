import React from 'react';
import Gallery1 from '../ImageAssets/gallery-pexels-bacho-nadiradze-7541876.jpg';
import Gallery2 from '../ImageAssets/gallery-pexels-juan-pablo-serrano-arenas-894695.jpg';
import Gallery3 from '../ImageAssets/gallery-pexels-gül-işık-2128109-cropped.jpg';

function RowFunction({image, heading, info1, info2, info3, info4}) {
    return(
        <div className='Row'>
            <div className='Column'>
                <img src={image} alt='idk related about coffee'/>
            </div>
            <div className='Column'>
                <div className='Elements'>
                    <h3>{heading}</h3>
                    <p>{info1}<br />{info2}<br />{info3}<br />{info4}</p>
                </div>
            </div>
        </div>

    )
}

function RowRightFunction({image, heading, info1, info2, info3, info4}) {
    return(
        <div className='RowRight'>
            <div className='Column'>
                <div className='Elements'>
                    <h3>{heading}</h3>
                    <p>{info1}<br />{info2}<br />{info3}<br />{info4}</p>
                </div>
            </div>
            <div className='Column'>
                <img src={image} alt='idk related about coffee'/>
            </div>
        </div>

    )
}

export default function Section1() {
    return(
        <div className='Section1Div'>
            <div className='Container'>
                <RowFunction 
                image={Gallery1}
                heading={"Packed with Elegance"}
                info1={"We apply food safety and security to"}
                info2={"our packages making sure aroma is preserved."}
                info3={"We also provide different sizes for"}
                info4={"your needs!"}
                />
                <RowRightFunction
                image={Gallery2}
                heading={"Brewed to Perfection"}
                info1={"our state of the art machinery does the"}
                info2={"work of brewing high quality coffee! Preserved"}
                info3={"strong flavors from coffee beans had been"}
                info4={"finely crushed."}
                />
                <RowFunction 
                image={Gallery3}
                heading={"Served with Love"}
                info1={"We will get your coffee on your table"}
                info2={"with aesthetic and elegance! That's how we"}
                info3={"serve our coffee, with love, for"}
                info4={"our customers!"}
                />
         
            </div>
        </div>
    )
}