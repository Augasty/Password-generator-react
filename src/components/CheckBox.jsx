import React from 'react'

const CheckBox = ({checkboxData,onChange}) => {
  return (
    <div className='checkboxes'>
    {checkboxData.map((cb, idx) => (
      <div key={idx}>
        <input type='checkbox' checked={cb.state} onChange={() => onChange(idx)}></input>
        <label>{cb.title}</label>
      </div>
    ))}
  </div>
  )
}

export default CheckBox