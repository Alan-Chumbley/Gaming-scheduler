import React from 'react'

const OutlineBtn = (props) => {
  return (
    <button
      className='rounded-full border-cyan text-cyan px-10 border-2 bg-transparent font-sub uppercase flex justify-center mx-auto mb-8 w-fit hover:bg-cyan hover:text-darkGrey'
      onClick={props.onClick}
      id={props.id}
      data-index={props.index}
    >
      {props.name}
    </button>
  )
}

export default OutlineBtn