import React, { useEffect } from 'react'
// import Tab from '../../components/Tab'
import { getPostComments, getPostDetails } from '../../store/posts/actions'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import PostDetail from '../../components/PostDetail'

// const tabs = [
//   { name: 'FEED', active: true },
//   { name: 'PEOPLE', active: false },
//   { name: 'TRENDING', active: false }
// ]

export default function PostPage () {
  // const [activeTab, setActiveTab] = React.useState('FEED')

  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPostDetails(params.id))
    dispatch(getPostComments(params.id))
  }, [params.id])

  console.log(params)
  return (
    <div className='px-1'>
      <PostDetail />
    </div>
  )
}
