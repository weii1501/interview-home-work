import React from 'react'
import { useSelector } from 'react-redux'
import PostItem from './PostItem'

export default function Posts () {
  const { posts, loadingPosts } = useSelector((state) => state.PostReducer)

  return (
    <div>
      {loadingPosts && <p>Loading...</p>}

      {posts.map((post, index) => (
        <PostItem
          key={index}
          post={post}
        />
      ))}

    </div>
  )
}
