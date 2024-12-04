import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { Home } from './Home.js';
// import { About } from './About';
import { Product } from './Product.jsx';
import { Cart } from './Cart';
import { useState } from 'react';
import { Footer } from './Footer.js';
import { Signup } from './Loginfolder/Signup.js';
import { Login } from './Loginfolder/Login.js';

function App() {
  const [Productforcart, setproductforcart] = useState([]);
  const [userEmail, setUserEmail] = useState('')
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
     <Routes>
      <Route>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/product' element={<Product Productforcart={Productforcart} setproductforcart={setproductforcart}></Product>}></Route>
      <Route path='/cart' element={<Cart Productforcart={Productforcart} setproductforcart={setproductforcart}></Cart>}></Route>
      <Route path='/signup'element={<Signup setUserEmail = {setUserEmail}></Signup>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      </Route>
     </Routes>
     <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
