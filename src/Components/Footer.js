import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

function SocialMediaLinks({icon, link}) {
    return(
        <a href={link} target='_blank'>
            <span>
                <FontAwesomeIcon className='Icons' icon={icon} />
            </span>
        </a>
    )
}

export default function Footer() {
    return(
        <div className='FooterSection'>
            <div className='Top'>
                <div className='Contact'>
                    <p>If you have any queries and feedbacks, <br /> feel free to contact us!</p>
                    <div className='Email'>
                        <label>Email:</label>
                        <input type='text' placeholder='Email' />
                    </div>
                    <div className='Message'>
                        <label>Message:</label>
                        <textarea placeholder='Message' />
                    </div>
                    <button>submit</button>
                </div>
                <div className='Remarks'>
                    <div className='Logo'>
                        <h2>BARAKO</h2>
                        <h3>Café</h3>
                    </div>
                    <p> BarakoCafé is a website designed for a coffee shop opening for e-commerce.
                        Made with React JS. Made for honing coding and designing skills for 
                        front-end web development.
                    </p>
                    <p> Obviously, it doesn't aesthetically appeal like an actual website,
                        maybe because of the choice of fonts, colors and components, it may also
                        lack interactivity. I aim to improve the UI/UX design for this.
                        Criticisms are appreciated.
                    </p>
    
                </div>
            </div>
            <hr />
            <div className='Bottom'>
                <div className='Logo'>
                    <h2>BARAKO</h2>
                    <h3 className='Cafe'>Café</h3>
                </div>
                <div className='Links'>
                    <SocialMediaLinks icon={faFacebook} link={'https://Facebook.com/'} />
                    <SocialMediaLinks icon={faYoutube} link={'https://Youtube.com/'} />
                    <SocialMediaLinks icon={faTwitter} link={'https://Twitter.com/'} />
                    <SocialMediaLinks icon={faInstagram} link={'https://Instagram.com/ '} />
                </div>
            </div>
        </div>
    )
}