import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import AboutUsSection from '../Components/AboutUsSection';

export default function AboutUs() {
    return(
        <div className='AboutUsPage'>
            <header>
                <Header />
            </header>
            <main>
                <AboutUsSection />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}