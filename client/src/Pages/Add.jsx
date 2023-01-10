import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  const [books,setBooks]=useState({id:'',book:''})
  const navigate =useNavigate()
  const handleChange=(e)=>{
  setBooks(prev=>({...prev,[e.target.name]:e.target.value}))
}
console.log(books);
//podting  data
const handleClick =async(e)=>{
e.preventDefault()
try {
 await axios.post('http://localhost:8800/books',books)
 navigate('/')
} catch (error) {
  console.log(error);
}
}
  return (
    <div>
      <h1>add Book</h1>
      <hr />
      <input type="number" name='id' placeholder='enter book id' onChange={handleChange}/>
      <input type="text" name='book' placeholder='enter book name'onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add