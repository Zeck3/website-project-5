import React from 'react';

export default function Footer() {
    return(
        <div id='FooterDiv'>
            <div id='Container'>
                <div className='Columns'>
                    <h3>Shop</h3>
                    <ul>Gingoog Branch</ul>
                    <ul>Cagayan De Oro Branch</ul>
                    <ul>Shop Online via FoodPanda</ul>
                </div>
                <div className='Columns'>
                    <h3>Learn</h3>
                    <ul>Health Benefits</ul>
                    <ul>Caffeine Content</ul>
                    <ul>Brewing Techniques</ul>
                </div>
                <div className='Columns'>
                    <h3>More From US!</h3>
                    <ul>FAQ's</ul>
                    <ul>Our Story</ul>
                    <ul>Blog</ul>
                    <ul>Contact Us</ul>
                    <ul>Affiliate</ul>
                </div>
                <div className='Columns'>
                    <div id='Logo'>
                        <h2>BARAKO</h2>
                        <h3 id='Cafe'>Café</h3>
                    </div>
                    <h3 id='Contacts'>Contacts</h3>
                    <ul>Facebook</ul>
                    <ul>Instagram</ul>
                    <ul>Youtube</ul>
                </div>
            </div>
        </div>
    )
}