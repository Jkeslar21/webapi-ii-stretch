import React from 'react'
import Post from './Post';

export default function Posts(props) {
  return (
    <div>
      {props.posts.map((post, index) => {
          return <Post post={post} key={index} />
      })}
    </div>
  )
}
