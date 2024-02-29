import React, { useEffect } from 'react'
// import Tab from '../../components/Tab'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../store/posts/actions'
import Posts from '../../components/Posts'

// const tabs = [
//   { name: 'FEED', active: true },
//   { name: 'PEOPLE', active: false },
//   { name: 'TRENDING', active: false }
// ]

export default function HomePage () {
  // const [activeTab, setActiveTab] = React.useState('FEED')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <div className='px-1'>
      <Posts />
    </div>
  )
}
