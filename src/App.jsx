import { useState } from 'react'
import Navbar from "./Navbar.jsx";
import './App.css'
import Home from './pages/Home.jsx';
import savedSessions from './pages/savedSessions.jsx';
import Wishlist from './pages/Wishlist.jsx';
import Calender from './pages/Calender.jsx';
import {Route, Routes} from 'react-router-dom';
function App() {
 

  return (
  
    <>
    <Navbar />
    <div className='container'> 
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/calender' element={<Calender />}/>
  <Route path='/savedSessions' element ={<savedSessions />} />
  <Route path='/wishlist' element ={<Wishlist />} />
  
</Routes>
    
    </div>
    </>
      
  )
}

export default App