import React from 'react'
import './Wishlist.css'

const Wishlist = () => {
  return (
    <div className='container mx-auto wishlist'>

      {/* background overlay */}
      <div className='overlay'></div>

      {/* content */}
      <h1 className='font-main text-red text-center'>Wishlist</h1>
      <p className='font-smallText text-center mt-4'>Click on the selected title to start scheduling</p>

      {/* wishlist cards */}
      <div>

      </div>
    </div>
  )
}

export default Wishlist