import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Highlight from '../Components/Highlight';
import SectionBreak from '../Components/SectionBreak';

export default function Home() {
    return(
        <div className='HomePage'>
            <header>
                <Header />
            </header>
            <main>
                <section>
                    <Highlight />
                </section>
                <section>
                    <SectionBreak />
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}