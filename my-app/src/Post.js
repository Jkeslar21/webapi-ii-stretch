import React from 'react'

export default function Post(props) {
  return (
    <div>
      <p>Title: {props.post.title}</p>
      <p>Contents: {props.post.contents}</p>
      <p>Created At: {props.post.created_at}</p>
      <p>Updated At: {props.post.updated_at}</p>
    </div>
  )
}
