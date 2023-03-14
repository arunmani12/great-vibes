import React from 'react'

const Input = ({id,type,placeholder,name,value,onChange}) => {
  return (
    <input
    className="appearance-none h-9 bg-card border border-card-border rounded w-full py-2 px-3 text-placeholder leading-tight focus:outline-none focus:shadow-outline"
    id={id}
    type={type}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
  />
  )
}

export default Input