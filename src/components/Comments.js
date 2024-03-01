import React from 'react'
import { Link } from 'react-router-dom'
import { fToNow } from '../utils/formatTime'
import { faker } from '@faker-js/faker'
import { useSelector } from 'react-redux'

export default function Comments () {
  const { comments } = useSelector((state) => state.PostReducer)

  return (
    <div className='comments'>
      {comments.map((comment, index) => (
        <div key={`${comment.id}-${index}`} className='d-flex mb-3'>
          <Link to='#' className='me-2'>
            <img
              src='/interview-home-work/img/rmate1.jpg'
              alt='avt'
              className='img-fluid rounded-circle'
            />
          </Link>

          <div className='ms-2 small'>
            <div className='bg-white mb-1' style={{ fontSize: '13px' }}>
              <p className='mb-0' style={{ fontWeight: 600 }}>
                {comment.email}
                <span className='text-muted ms-3' style={{ fontWeight: 500, fontSize: '11px' }}>
                  {fToNow(faker.date.between('2024-02-25', '2024-02-29'))}
                </span>
              </p>
              <span className='text-muted'>{comment.body}</span>
              <br />
              <div className='text-muted py-1' style={{ fontSize: '11px' }}>Reply to</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
