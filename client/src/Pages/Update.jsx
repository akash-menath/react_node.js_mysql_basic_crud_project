import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Update = () => {
  const [books,setBooks]=useState({id:'',book:''})
  const navigate =useNavigate()
  const location=useLocation()
  
  const handleChange=(e)=>{
  setBooks(prev=>({...prev,[e.target.name]:e.target.value}))
}
//podting  data
const handleClick =async(e)=>{
e.preventDefault()
try {
  const id= location.pathname.split('/')[2]
 await axios.put('http://localhost:8800/books/'+id,books)
 navigate('/')
} catch (error) {
  console.log(error);
}
}
  return (
    <div>
      <h1>Update Book</h1>
      <hr />
      <input type="number" name='id' placeholder='enter book id' onChange={handleChange}/>
      <input type="text" name='book' placeholder='enter book name'onChange={handleChange}/>
      <button onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update