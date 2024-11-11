import React, { useEffect, useState } from 'react';
import './Cart.css';

export const Cart = ({ Productforcart, setproductforcart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate total price whenever Productforcart changes
  useEffect(() => {
    const total = Productforcart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [Productforcart]);

  // Remove item from cart
  function removecart(item) {
    const updatedCart = Productforcart.filter((cartItem) => cartItem.id !== item.id);
    setproductforcart(updatedCart);
  }

  // Function to increase quantity
  const increaseQuantity = (item) => {
    setproductforcart(
      Productforcart.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    );
  };

  // Function to decrease quantity
  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      setproductforcart(
        Productforcart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        )
      );
    } else {
      removecart(item);
    }
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-list">
        {Productforcart.length > 0 ? (
          Productforcart.map((data, index) => (
            <div className="cart-item" key={index}>
              <img src={data.image} alt={data.productName} />
              <h1>{data.productName}</h1>
              <p>Price: ₹{data.price}</p>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(data)}>-</button>
                <span>{data.quantity}</span>
                <button onClick={() => increaseQuantity(data)}>+</button>
              </div>
              <button className="btn btn-primary" onClick={() => removecart(data)}>
                Remove from Cart
              </button>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className="cart-total">
        <h3>Total Price: ₹{totalPrice}</h3>
      </div>
    </div>
  );
};

export default Cart;
