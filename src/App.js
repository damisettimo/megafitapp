import './App.css';
import { useState, createContext } from 'react';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import {CartProvider} from './context/CartContext'

function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          
          <Routes>
              <Route path='/' element={<ItemListContainer />}/>  
              <Route path='/detail/:productId' element={ <ItemDetailContainer />}/> 
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
