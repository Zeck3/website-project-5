import './App.css';
import './MainComponents.css';

import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Products from './Pages/Products';
import Business from './Pages/Business';
import AboutUs from './Pages/AboutUs';


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/products' element={<Products />}></Route>
      <Route path='/business' element={<Business />}></Route>
      <Route path='/aboutus' element={<AboutUs />}></Route>
    </Routes>
  );
}
