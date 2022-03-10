import React from 'react'
import MyButton from './MyButton'

export default function TableBody({ post, remove }) {
  return (
    <>
      <div className="card position-static my-3 bg-light">
        <div className="card-header">
          {post.id}
        </div>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          <MyButton href="#" className="btn btn-outline-danger mt-2" onClick={() => remove(post)}>Delete</MyButton>
        </div>
      </div>
    </>
  )
}
