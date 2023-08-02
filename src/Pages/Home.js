import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';
import Section1 from '../Components/Section1';

export default function Home() {
    return(
        <div className='HomePage'>
            <header>
                <Header />
            </header>
            <main>
                <section>
                    <HeroSection />
                </section>
                <section>
                    <Section1 />
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}