import React, { useContext, useState } from 'react'
import { BooksContext } from '../BooksContext'
import SingleBook from './SingleBook'

const SearchPage = () => {

  const [input, setInput] = useState("")
  const {books} = useContext(BooksContext)
  
  const searchedItems = books.filter(book => book.name.toLowerCase().includes(input)|| book.author.toLowerCase().includes(input) )
  return (
    <div className='p-4 flex flex-col items-center'>
      <input onChange={(e)=>setInput(e.target.value)} value={input} className='w-[40vw] border p-1 border-black rounded-md' type='search' placeholder='Search books by title and author....' />

       <div>
          <p className='text-lg font-semibold m-3'>Showing "{searchedItems.length}" items</p>
         
          <div className='flex flex-wrap gap-5 justify-center '>
            {
              searchedItems?.map(book =>  <SingleBook book={book} key={book._id}/>)
            }
          </div>
         
        
        </div>
      
    </div>

  )
}

export default SearchPage