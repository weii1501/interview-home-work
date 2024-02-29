import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fDate } from '../utils/formatTime'
import { faker } from '@faker-js/faker'
import { getPostUser } from '../store/posts/actions'
import Comments from './Comments'

export default function PostDetail () {
  const { comments, post, loadingPostDetails, loadingPostComments } = useSelector(
    (state) => state.PostReducer
  )

  const [toggle, setToggle] = React.useState(false)

  return (
    <div>
      {loadingPostDetails && <p>Loading...</p>}
      {!loadingPostDetails && (
        <div className='bg-white p-3 rounded-4 mb-2 '>
          <h1 className='fs-4 my-1 text-center' style={{ fontWeight: '600' }}>
            {post.title}
          </h1>
          <User />
          <h6 style={{ fontSize: '13px' }}>
            Created: {fDate(faker.date.between('2015-01-01', '2015-01-05'))}
          </h6>
          <p style={{ fontSize: '13px' }}>
            {post.body}
          </p>
          <div className='d-flex justify-content-between'>
            <span
              className='text-muted collapse-comments'
              style={{ fontSize: '12px', marginBottom: '0px' }}
              onClick={() => setToggle(true)}
            >
              {!loadingPostComments && `${comments.length} replies`}
            </span>
            {toggle && (
              <span
                className='text-muted collapse-comments'
                style={{ fontSize: '12px', marginBottom: '0px' }}
                onClick={() => setToggle(false)}
              >
                Show less
              </span>
            )}
          </div>

          <hr className='mt-0' />

          {toggle && <Comments />}
        </div>
      )}
    </div>
  )
}

const User = () => {
  const { post, postUser, loadingPostDetails } = useSelector((state) => state.PostReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log(loadingPostDetails)
    if (!loadingPostDetails && post.userId) {
      console.log('dispatching')
      dispatch(getPostUser(post.userId))
    }
  }, [loadingPostDetails])

  console.log(postUser)

  return (
    <h6 className='mb-0' style={{ fontSize: '13px' }}>
      Author: <Link to='#'>{postUser && postUser[0].name}</Link>
    </h6>
  )
}
