import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import MiniHeroSection from '../Components/MiniHeroSection';
import PanelLeft from '../Components/PanelLeft';
import ProductsSection from '../Components/ProductsSection';

export default function Products() {
    return(
        <div className='ProductsPage'>
            <header>
                <Header />
            </header>
            <main>
                <section>
                    <MiniHeroSection />
                </section>
                <section>
                    <PanelLeft />
                </section>
                <section>
                    <ProductsSection />
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}