import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../store/posts/actions'
import Posts from '../../components/Posts'
import { InView } from 'react-intersection-observer'

export default function HomePage () {
  const { posts, loadingPosts } = useSelector((state) => state.PostReducer)
  const [page, setPage] = React.useState(1)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts({ oldPosts: posts, page, setPage }))
  }, [])

  return (
    <div className='px-1'>
      <Posts />
      {loadingPosts && <p>Loading...</p>}
      <InView
        as='div'
        onChange={(inView, entry) => {
          console.log(inView)
          if (inView) {
            if (page <= 10) {
              setPage(page + 1)
              dispatch(getPosts({ oldPosts: posts, page, setPage }))
            }
          }
        }}
      >
        <div className='content' style={{ height: '20px', width: '100%', background: 'transparent' }} />
      </InView>
    </div>
  )
}
