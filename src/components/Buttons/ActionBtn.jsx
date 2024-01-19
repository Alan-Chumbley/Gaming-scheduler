import React from 'react'

const ActionBtn = (props) => {
  return (
    <button className='rounded-full border-cyan outline-2 bg-cyan' onClick={props.onClick} id={props.id}>
        {props.name}
    </button>
  )
}

export default ActionBtn