import React, { useContext } from 'react'
import { BooksContext } from '../BooksContext'

const SingleBook = ({book}) => {
    const{_id, img, name, author, rating, currentlyReading, wantToRead, read} = book
    const {handleBookShelf} = useContext(BooksContext)
  return (
    <div className='min-w-[20vw]  border-2 border-black'>
        <div className=" w-full h-[250px] p-2" >
            <img className='w-full h-full' src={img} alt='backup'/>
        </div>
        <div className='w-full p-2'>
            <p>{name}</p>
            <p>{author}</p>
            <p>{rating}</p>
            <select onChange={(e)=>handleBookShelf(e, _id)} className='border border-black bg-gray-600 text-white p-1 rounded-md cursor-pointer'>
                <option value="currentlyReading" selected={currentlyReading} >Currently Reading</option>
                <option value="wantToRead" selected={wantToRead} >Want To Read</option>
                <option value="read" selected={read} >Read</option>
                <option value="remove" >Remove</option>
            </select>
        </div>
    </div>
  )
}

export default SingleBook