import React, { useRef } from 'react';
import Logo from "../asset/images/logo.png";
import {cart} from "../Data";
const Navbar = () => {
  const searchRef = useRef();
  const cartRef = useRef();
  const navbarRef = useRef();

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };
 const cartHandler =() =>{
  cartRef.current.classList.toggle("active");
  searchRef.current.classList.remove("active");
  navbarRef.current.classList.remove("active");
 };
 const navbarHanler =() =>{
  navbarRef.current.classList.toggle("active");
  searchRef.current.classList.remove("active");
  cartRef.current.classList.remove("active");
 };
  return (
    <>
      <header className="header">
        <a href='#' className="logo">
          <img src={Logo} alt="" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#home">home</a>
          <a href="#home">about</a>
          <a href="#home">menu</a>
          <a href="#home">products</a>
          <a href="#home">review</a>
          <a href="#home">contact</a>
          <a href="#home">blogs</a>
        </nav>
        <div className="icons">
          <div className="fa fa-search" aria-hidden="true" onClick={searchHandler}></div>
          <div className="fa fa-shopping-cart" aria-hidden="true" onClick={cartHandler}></div>
          <div className="fa fa-bars" 
          id="menu-btn"
          onClick={navbarHanler}
          ></div>
        </div>
        <div className="search-form" ref={searchRef}>
          <input type="search" placeholder="search here..." id="search-box" />
          <label htmlFor="search-box"></label>
        </div>
       <div className="cart-items-container " ref={cartRef}>
       {
        cart.map((item,index)=>(
          <div className="cart-item" key={index}>
             <span className="fa fa-times" aria-hidden="true"></span>
             <img src={item.img} alt=""/>
              <div className="content">
                <h3>cart item 01</h3> 
                <div className="price">Rs 1225.99</div>
                </div>
              </div>
        ))
       }
       <a className="btn" href="#">
        checkout now
       </a>
       
       </div>
      
      </header>
    </>
  );
};

export default Navbar;
