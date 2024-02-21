import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './modules/Home/Home';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Product from './components/Product';
import Error from './components/Error';
import Category from './components/Category';
import CategoryProducts from './components/CategoryProducts';
import Cart from './components/Cart';

function App() {
  return (
    <div>
       <Header/>
        <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/category' element={<Category/>}/>
              <Route path='/products/:id' element={<Product/>}/>
              <Route path='/category/:name' element={<CategoryProducts/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='*' element={<Error/>}/>
        </Routes>
       <Footer/>
    </div>
  );
}

export default App;
