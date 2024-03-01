import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fDate } from '../utils/formatTime'
import { faker } from '@faker-js/faker'

export default function PostItem ({ post }) {
  const [user, setUser] = React.useState({})
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${post?.userId}`)
      .then((response) => response.json())
      .then((json) => setUser(json))
  }, [post])

  return (
    <div className='bg-white p-3 rounded-4 mb-2 '>
      <Link to={`/${post.id}`} className='fs-5 my-1 text-start' style={{ fontWeight: '600' }}>
        {post.title}
      </Link>
      <p style={{ fontSize: '13px', marginBottom: 0 }}>
        {post.body}
      </p>
      <p className='text-muted' style={{ fontSize: '12px', marginBottom: 0 }}>
        Author: {user?.name} - {fDate(faker.date.between('2015-01-01', '2015-01-05'))}
      </p>
    </div>
  )
}
