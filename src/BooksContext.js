import { createContext, useState} from "react";
import { booksList } from "./Data";
export const BooksContext = createContext()


const BookList = booksList.map((book,idx)=>
idx%2 === 0 
   ? ({...book,currentlyReading:true,wantToRead:false, read:false})
   :({...book,currentlyReading:false,wantToRead:true, read:false})
)


export function BooksContextProvider({children}){
const [books, setBooks] = useState(BookList)

const currentlyReading = books.filter(book => book.currentlyReading)
const wantToRead = books.filter(book => book.wantToRead)
const read = books.filter(book => book.read)

    const handleBookShelf = (e, id) => {
        const name = e.target.value
        setBooks(prev => prev.map(book => {
            if(book._id === id){
                if(name === "currentlyReading"){
                    return ({...book,currentlyReading:true, wantToRead: false, read: false})
                }else if(name === "wantToRead"){
                    return ({...book,currentlyReading:false, wantToRead: true, read: false})
                }else if(name === "read"){
                    return ({...book,currentlyReading:false, wantToRead: false, read: true})
                }else{
                    return ({...book,currentlyReading:false, wantToRead: false, read: false})
                }
            }else{
                return book
            }
        }))
    }


    return(
        <BooksContext.Provider value={{books, currentlyReading, wantToRead, read, handleBookShelf}} >
            {children}
        </BooksContext.Provider>
    )
  

}

export default BooksContextProvider