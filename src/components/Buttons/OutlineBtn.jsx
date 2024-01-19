import React from 'react'

const OutlineBtn = (props) => {
  return (
    <button className='rounded-full border-cyan outline-2 bg-transparent'  onClick={props.onClick} id={props.id}>
        {props.name}
    </button>
  )
}

export default OutlineBtn