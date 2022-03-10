import React from 'react'

export default function MySelect({defaultValue , value , onChange , options}) {
  return (
    <select className='form-select mx-2'
    value={value} onChange={(e) => onChange(e.target.value)}>
      <option disabled>{defaultValue}</option>
      {options.map( (opt) => (
        <option value={opt.value} key={opt.value}>{opt.name}</option>
      ))}
    </select>
  )
}
