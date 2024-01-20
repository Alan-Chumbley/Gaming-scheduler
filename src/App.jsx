import { useState } from 'react'
import Navbar from "./Navbar.jsx";
import './App.css'
import Home from './pages/Home/Home.jsx';
import Player1 from './pages/Players/Player1.jsx'
import Player2 from './pages/Players/Player2.jsx'
import Recommendation from './pages/Recommendation/Recommendation.jsx';
import SavedPlayers from './pages/SavedPlayers/SavedPlayers.jsx';
import Sessions from './pages/Sessions/Sessions.jsx';
import Summary from './pages/Summary/Summary.jsx'
import Wishlist from './pages/Wishlist/Wishlist.jsx';
import {Route, Routes} from 'react-router-dom';
function App() {
 

  return (
  
    <>
    <Navbar />
    <div className='container mx-auto'> 
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/player1' element ={<Player1 />} />
      <Route path='/player1/player2' element ={<Player2 />} />
      <Route path='/recommendation' element ={<Recommendation />} />
      <Route path='/savedplayers' element ={<SavedPlayers />} />
      <Route path='/sessions' element ={<Sessions />} />
      <Route path='/player1/player2/summary' element ={<Summary />} />
      <Route path='/wishlist' element ={<Wishlist />} />
    </Routes>
    </div>
    </>
      
  )
}

export default App