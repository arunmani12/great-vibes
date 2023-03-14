import React from 'react'

const ButtonPrimary = ({onClick,children}) => {
  return (
    <button
    className="bg-primary-color hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
  )
}

export default ButtonPrimary