import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
export const Header = ({UserEmail}) => {
  console.log(UserEmail);
  
  return (
    <header className="header">
      <div className="logo">BagZone</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/cart">Cart</Link>
        {
          UserEmail ? <p>Hi, 👋 {UserEmail}</p> : <Link to="/signup">Signup</Link>
        }
      </nav>
    </header>
  );
};

export default Header;