import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { Home } from './Home.js';
import { About } from './About';
import { Product } from './Product.jsx';
import { Cart } from './Cart';
import { useState } from 'react';

function App() {
  const [Productforcart, setproductforcart] = useState([]);
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
     <Routes>
      <Route>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/product' element={<Product Productforcart={Productforcart} setproductforcart={setproductforcart}></Product>}></Route>
      <Route path='/cart' element={<Cart Productforcart={Productforcart} setproductforcart={setproductforcart}></Cart>}></Route>
      </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
