import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import PanelLeft from '../Components/PanelLeft';

export default function Business() {
    return(
        <div className='BusinessPage'>
            <header>
                <Header />
            </header>
            <main>
                <section>
                    <PanelLeft />
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}