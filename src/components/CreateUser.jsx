import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addUser } from '../features/users/userSlice'

const CreateUser = () => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [mobile, setMobile] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(addUser([name,age,mobile]))
  }


  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='user name' name='name'  onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder='user age' name='age'  onChange={(e)=> setAge(e.target.value)}  />
        <input type="text" placeholder='user mobile' name='mobile'  onChange={(e)=> setMobile(e.target.value)}  />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default CreateUser