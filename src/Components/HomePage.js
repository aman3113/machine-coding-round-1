import React, { useContext } from 'react'
import { BooksContext } from '../BooksContext'
import SingleBook from './SingleBook'

const HomePage = () => {
    const { currentlyReading, wantToRead, read} = useContext(BooksContext)
    console.log(wantToRead[0])
  return (
    <div className=''>
        <p>Home Page</p>
        <div>
          <p>
            Currently Reading
          </p>
          {
            currentlyReading.length === 0 && <p>There are no books in this Category. Add some.</p>
          }
          <div className=' overflow-x-auto Scroll p-2'>
          <div className='flex gap-16  max-w-[100vw]'>
          {
            currentlyReading.map(book => <SingleBook book={book} key={book._id}/>)
          }
          </div>
          </div>
         
         
        </div>
        <div>
          <p>
            Want To Read
          </p>
          {
            wantToRead.length === 0 && <p>There are no books in this Category. Add some.</p>
          }
          <div className=' overflow-x-auto Scroll p-2'>
          <div className='flex gap-16  max-w-[100vw]'>
          {
            wantToRead.map(book => <SingleBook book={book} key={book._id}/>)
          }
          </div>
          </div>
         
         
        </div>
        <div>
          <p>
             Read
          </p>
          {
            read.length === 0 && <p>There are no books in this Category. Add some.</p>
          }
          <div className=' overflow-x-auto Scroll p-2'>
          <div className='flex gap-16  max-w-[100vw]'>
          {
            read.map(book => <SingleBook book={book} key={book._id}/>)
          }
          </div>
          </div>
         
         
        </div>
    </div>
  )
}

export default HomePage