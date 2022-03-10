import React from 'react'

export default function MyButton({children , className , ...props}) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}
