import React from 'react'
import MyInput from './UI/MyInput'
import MySelect from './UI/MySelect'

export default function SelectAndInput({ filter, setFilter}) {

  return (
    <div className='d-flex my-3'>
      <MyInput type="text" placeholder='Search...' className='form-control text-capitalize mx-2'
        onChange={(e) => setFilter({...filter , query: e.target.value})}
        value={filter.query}
      />
      <MySelect
        options={[{ name: 'Title', value: 'title' }, { name: 'Text', value: 'body' }]}
        defaultValue='Sorted by'
        value={filter.sort}
        onChange={(selected) => setFilter({...filter , sort: selected})}
      ></MySelect>
    </div>
  )
}
