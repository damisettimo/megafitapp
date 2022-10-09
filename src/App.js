import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
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
    
      
      


    </div>
  );
}

export default App;
