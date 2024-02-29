import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Posts () {
  const { posts, loadingPosts } = useSelector((state) => state.PostReducer)

  return (
    <div>
      {loadingPosts && <p>Loading...</p>}

      {posts.map((post, index) => (
        <div key={index} className='bg-white p-3 rounded-4 mb-2 '>
          <Link to={`/${post.id}`} className='fs-5 my-1 text-start' style={{ fontWeight: '600' }}>
            {post.title}
          </Link>
          {/* <h6 className='mb-0' style={{ fontSize: '13px' }}> */}
          {/*  Author: <Link to='#'>Cat face</Link> */}
          {/* </h6> */}
          {/* <h6 style={{ fontSize: '13px' }}> */}
          {/*  Created: {fDate(post.created_at)} */}
          {/* </h6> */}
          <p style={{ fontSize: '13px' }}>
            {post.body}
          </p>
        </div>
      ))}

    </div>
  )
}
