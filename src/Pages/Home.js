import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Highlight from '../Components/Highlight';
import PanelLeft from '../Components/PanelLeft';
import PanelCenter from '../Components/PanelCenter';


export default function Home() {
    return(
        <div className='HomePage'>
            <header>
                <Header />
            </header>
            <main>
                <Highlight />
                <PanelLeft />
                <PanelCenter />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}