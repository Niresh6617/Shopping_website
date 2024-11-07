import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
export const Header = () => {
  return (
    <header className="header">
      <div className="logo">BagZone</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Products</Link>
        <Link to="/cart">Cart</Link>
        
      </nav>
    </header>
  );
};

export default Header;