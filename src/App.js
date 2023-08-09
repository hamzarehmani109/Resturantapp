import React from 'react';
import './asset/css/style.css';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'; 
import Menu from './components/Menu';
import Products from './components/Products';
import Review from './components/Review';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Menu/>
      <Products/>
      <Review/>
      <Blog/>
      <Contact/>
      <Footer/>
      
    </>
  );
}

export default App;
