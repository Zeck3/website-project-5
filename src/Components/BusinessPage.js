import React from 'react';
import Coffee from '../ImageAssets/pexels-gül-işık-2128109.jpg'

export default function BusinessPage() {
    return(
        <div className='BusinessPageDiv'>
            <div className='Container'>
                <div className='Column'>
                    <img src={Coffee} alt='Coffee table' />
                </div>
                <div className='Column'>
                    <div className='Elements'>
                        <h2>Inquire Business <br /> with US!</h2>
                        <p> We are situated somewhere down the road and you're lucky enough to find us
                            because we offer business opportunities that you might find interesting.
                        </p>
                        <br />
                        <p> BarakoCafé had been significantly growing for the past couple of months
                            despite not having a real "vision", the business is a true witness of our success.
                            And we're here to share that success to those who are willing to grow the business
                            with US!
                        </p>
                        <br />
                        <p> Contact us at BarakoCafé@email.com or call our hotline 0900-001-001.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}