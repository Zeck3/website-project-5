import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import BusinessPage from '../Components/BusinessPage';

export default function Business() {
    return(
        <div className='BusinessPage'>
            <header>
                <Header />
            </header>
            <main>
                <section>
                    <BusinessPage />
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}