import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { useQuery } from 'react-query'
import { fetchPost } from '../helpers/fetch_helper'
import { Link } from 'react-router-dom'

export default function RightBar () {
  const [search, setSearch] = useState('')
  const { data: posts, isLoading } = useQuery({
    queryKey: ['posts', { search }],
    queryFn: () => fetchPost(search),
    staleTime: Infinity,
    cacheTime: 0
  })

  return (
    <aside className='sticky-top' style={{ maxHeight: '90vh' }}>
      <div className=''>
        <div className='form-control bg-white rounded-4 shadow-sm'>
          <div className='d-flex'>
            <span className='d-flex align-items-center pe-2'>
              <IoSearch
                size={20}
                color='#0c6dfd'
              />
            </span>
            <input
              type='text'
              className='py-1'
              placeholder='Search'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {search !== '' && posts?.length > 0 && !isLoading &&
            <ul className='pt-2 w-100 border-top overflow-y-scroll'>
              {posts?.map((post) => (
                <li key={post.id} className='w-100 search-text'>
                  <Link to={`/interview-home-work/${post.id}`} className='text-muted w-100' style={{ fontSize: '14px' }}>
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>}
        </div>
      </div>

      {/* <QueryTest /> */}
    </aside>
  )
}
