import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'



const Books = () => {
  const [books, setBooks] = useState([])

  const handleDelete =async(id)=>{
try {
  await axios.delete(`http://localhost:8800/books/${id}`)
} catch (error) { console.log(error)}
  }


  useEffect( () => {
  const fetchAllBooks=async ()=>{
   try {
    const allBooks = await axios.get('http://localhost:8800/books')
    setBooks(allBooks.data)
   } catch (error) {console.log(error)}
  }
  fetchAllBooks()
  }, [handleDelete])


  return (
    <div>
      {books.map((book,i)=>{
        return <div key={i}>
          <h1>{book?.id}</h1>
          <h2>{book?.book}</h2>
          <button onClick={()=>{handleDelete(book?.id)}}>Delete</button>
         <button ><Link to={`/update/${book.id}`} >Update</Link></button>
        </div>
      })}
      <button><Link to='/add'>ADD BOOKS</Link></button>
      
    </div>
  )
}

export default Books