// import React from 'react'

const Button = ({ title }) => { // Destructure the title prop
  return (
    <button className="bg-orange-400 text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition duration-300">
      {title}      
    </button>
  ) 
}

export default Button