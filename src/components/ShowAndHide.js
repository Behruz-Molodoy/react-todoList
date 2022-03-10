import React, { useState } from 'react'

export default function ShowAndHide({text}) {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <button className='btn btn-secondary' onClick={(e) => setToggle(!toggle)}>{
        toggle
          ? 'Hide'
          : 'Show'
      }</button>
      {toggle
        ? <span className='lead text-danger mx-2'>{text}</span>
        : null
      }
    </>
  )
}
