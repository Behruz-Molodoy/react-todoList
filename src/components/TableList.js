import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { TransitionGroup } from 'react-transition-group'
import TableBody from './UI/TableBody'

export default function TableList({ posts, setPosts }) {
  const remove = (post) => {
    setPosts(posts.filter(objects => objects.id !== post.id))
  }
  return (
    <div className="table">
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition key={post.id} timeout={500}
          classNames="item">
            <TableBody post={post} remove={remove} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}
