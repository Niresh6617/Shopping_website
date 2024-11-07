import React, {} from 'react'
import products from './Product.js';
import './Product.css'; // Adjust the path as needed

export const Product = ({ Productforcart, setproductforcart }) => {
  
  return (
    <div className="product-list">
      {
        products.map((data,index)=>
          <div key={index}>
            <img src={data.image} alt="" width="100px"/>
            <h1>{data.productName}</h1>
            <p>Price: ₹{data.price}</p>
            
            <button className='btn btn-primary' onClick={()=>setproductforcart([...Productforcart,data])} >Add to cart</button>
          </div>
        )  
      }
      
    </div>
  );
};
    
