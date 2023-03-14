import React from 'react'

const Label = ({children,htmlFor}) => {
  return (
    <label
    className="block text-gray-700 w-full text-sm font-medium text-text-color mb-1"
    htmlFor={htmlFor}
  >
    {children}
  </label>
  )
}

export default Label