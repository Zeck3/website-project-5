import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

function SocialMediaLinks({icon, link}) {
    return(
        <a href={link} target='_blank'>
            <FontAwesomeIcon className='Icons' icon={icon} />
        </a>
    )
}

export default function Footer() {
    return(
        <div className='FooterSection'>
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