import React, { useState } from 'react'
import MyButton from './UI/MyButton'
import MyInput from './UI/MyInput'

export default function FormInputs({theme , setPosts , posts , setModal}) {
  const [post , setPost] = useState({
    id: Math.random(),
    title: '', 
    stack: ''
  })
  const addPost = (e) => {
    e.preventDefault()
    setModal(false)
    setPosts([...posts , post])
    setPost({title: '' , stack: '' , id: Math.random()})
  }
  return (
    <form>
      <h3 className='text-center'>{theme}</h3>
      <MyInput value={post.title} onChange={(e)=>setPost({...post , title: e.target.value})} type="text" className='form-control text-capitalize' placeholder='Programming Language'/>
      <MyInput value={post.stack} onChange={(e)=>setPost({...post , stack: e.target.value})} type="text" className='form-control my-3 text-capitalize' placeholder='Your Stack'/>
      <MyButton className='btn btn-outline-primary w-100' onClick={addPost}>Add List</MyButton>
    </form>
  )
}
