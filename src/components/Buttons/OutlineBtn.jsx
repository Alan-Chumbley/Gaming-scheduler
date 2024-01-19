import React from 'react'

const OutlineBtn = (props) => {
  return (
    <button className='rounded-full border-cyan outline-2 bg-transparent'>
        {props.name}
    </button>
  )
}

export default OutlineBtn