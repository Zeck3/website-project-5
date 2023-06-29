import './App.css';
import './ComponentsCSS/Header.css';
import './ComponentsCSS/Highlight.css';
import './ComponentsCSS/Footer.css';
import Header from './Components/Header';
import Highlight from './Components/Highlight';
import Footer from './Components/Footer';

export default function App() {
  return (
      <div className="App">
        <div id='HeaderDiv'><Header /></div>
        <div id='BodyDiv'><Highlight /></div>
        <div id='FooterDiv'><Footer /></div>
      </div>
  );
}
