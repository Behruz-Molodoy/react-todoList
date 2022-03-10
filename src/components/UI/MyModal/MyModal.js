import React from 'react'
import clasess from './MyModal.module.css'

export default function MyModal({ children  , modal , setModal}) {
  const modalClasess = [clasess.myModal]
  if(modal){
    modalClasess.push(clasess.active)
  }
  return (
    <div className={modalClasess.join(' ')}>
      <div className='btn btn-close position-absolute top-0 mt-5' onClick={() => setModal(false)}></div>
      <div className={clasess.myModalContent}>
        {children}
      </div>
    </div>
  )
}
