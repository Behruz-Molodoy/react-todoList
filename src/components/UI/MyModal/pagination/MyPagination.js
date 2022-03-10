import React from 'react'
import { getPageArray } from '../../../../Utils/page'
import MyButton from '../../MyButton'

export default function MyPagination({ totalPage, page, changePage }) {
  const pageArray = getPageArray(totalPage)
  return (
    <ul className='pagination d-flex flex-wrap'>
      <span className='w-100 py-2 text-center text-secondary'>Pagination</span>
      {pageArray.map(item => (
        <MyButton key={item} className={page === item ? 'btn btn-primary mt-2' : 'btn btn-outline-primary mt-2'}
          onClick={() => changePage(item)}>{item}</MyButton>
      ))}
    </ul>
  )
}
