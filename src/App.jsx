import { useState } from 'react'
import Navbar from "./Navbar.jsx";
import './App.css'
import Home from './pages/Home.jsx';
import Player1 from './pages/Player1.jsx'
import Player2 from './pages/Player2.jsx'
import Recommendations from './pages/Recommendation.jsx';
import SavedPlayers from './pages/SavedPlayers.jsx';
import Summary from './pages/Summary.jsx'
import Wishlist from './pages/Wishlist.jsx';
import {Route, Routes} from 'react-router-dom';
function App() {

  return (
  
    <>
    <Navbar />
    <div className='container'> 
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/player1' element ={<Player1 />} />
  <Route path='/player2' element ={<Player2 />} />
  <Route path='/recommendation' element ={<Recommendations />} />
  <Route path='/savedplayers' element ={<SavedPlayers />} />
  <Route path='/summary' element ={<Summary />} />
  <Route path='/wishlist' element ={<Wishlist />} />
  


</Routes>
    
    </div>
    </>
      
  )
}

export default App