import React from 'react'

export default function RightBar () {
  return (
    <aside className='sticky-top'>
      <div className=''>
        <div className='d-flex'>
          <div className='form-control bg-white rounded-4 shadow-sm'>
            <input
              type='text'
              className=''
              placeholder='Search'
            />
          </div>

          <div className='head-avt'>
            <img
              src='/img/rmate1.jpg'
              alt='avt'
            />
          </div>
        </div>
      </div>
    </aside>
  )
}
