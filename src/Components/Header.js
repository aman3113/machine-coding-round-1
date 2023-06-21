import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='p-3'>
        <p className='text-3xl text-center font-bold mb-3'>Track Your Readings</p>
        <div className='  flex justify-between items-center' >
        <Link className='border border-black p-1 bg-gray-700 text-white rounded-md text-sm sm:text-base' to={"/"}>Go to Home Page</Link>
        <Link className='border border-black p-1 bg-gray-700 text-white rounded-md text-sm sm:text-base' to={"/search"}>Go to Search Page</Link>
      </div>
    </div>
   
  )
}

export default Header