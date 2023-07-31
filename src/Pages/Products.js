import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import PanelLeft from '../Components/PanelLeft';
import PanelCenter from '../Components/PanelCenter';

export default function Products() {
    return(
        <div className='ProductsPage'>
            <header>
                <Header />
            </header>
            <main>
                <section>
                    <PanelLeft />
                </section>
                <section>
                    <PanelCenter />
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}