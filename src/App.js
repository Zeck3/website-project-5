import './App.css';
import './ComponentsCSS/Header.css';
import './ComponentsCSS/Highlight.css';
import './ComponentsCSS/Footer.css';
import './ComponentsCSS/HighlightPanelLeft.css';
import './ComponentsCSS/HighlightPanelRight.css';

import Header from './Components/Header';
import Highlight from './Components/Highlight';
import Footer from './Components/Footer';
import HighlightPanelLeft from './Components/HighlightPanelLeft';
import HighlightPanelRight from './Components/HighlightPanelRight';

export default function App() {
  return (
      <div className="App">
        <div id='HeaderDiv'>
          <Header />
        </div>
        <div id='BodyDiv'>
          <Highlight />
          <HighlightPanelLeft />
          <HighlightPanelRight />
        </div>
        <div id='FooterDiv'>
          <Footer />
        </div>
      </div>
  );
}
