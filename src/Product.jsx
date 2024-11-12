import React from 'react';
import products from './Product.js';
import './Product.css'; // Adjust the path as needed

export const Product = ({ Productforcart, setproductforcart }) => {

  // Function to add product to cart or increase quantity if already in cart
  const addToCart = (product) => {
    const existingProduct = Productforcart.find((item) => item.id === product.id);
    
    if (existingProduct) {
      setproductforcart(
        Productforcart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setproductforcart([...Productforcart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="product-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Products</h1>
        <h5>Home > Products</h5>
      </div>

      {/* Product List */}
      <div className="product-list">
        {
          products.map((data, index) => (
            <div key={index}>
              <img src={data.image} alt={data.productName} />
              <h1>{data.productName}</h1>
              <p>Price: ₹{data.price}</p>
              <button className='btn btn-primary' onClick={() => addToCart(data)}>
                Add to cart
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
};
