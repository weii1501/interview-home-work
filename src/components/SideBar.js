import React from 'react'
import { Link } from 'react-router-dom'
import { LABEL, PATH } from '../constants/paths'
import { Icon } from './Icon'

export function SideBar () {
  return (
    <aside className='col-3 sidebar-nav'>
      <div className='position-sticky top-0'>
        <div className='w-100 mb-4 pb-4'>
          <Link to={PATH.HOME} className=''>
            <img
              src='/interview-home-work/img/logo.png'
              alt='logo brand'
              style={{ height: '51px' }}
            />
          </Link>
        </div>

        <ul className='fs-6 navbar-nav w-100'>
          <li className='nav-item mb-2'>
            <Link to='/interview-home-work' className='nav-link active p-3 rounded-4 d-flex align-items-center'>
              <span className='me-2'>
                <Icon
                  iconName='HouseFill'
                  color='#000'
                  size={96}
                  className='align-top ml-2'
                  style={{
                    width: '1.5em',
                    height: '1.5em'
                  }}
                />
              </span>
              <span>
                {LABEL.HOME}
              </span>
            </Link>
          </li>

          <li className='nav-item'>
            <button type='button' className='nav-link text-muted active p-3 rounded-4 d-flex align-items-center w-100'>
              <span className='me-2'>
                <Icon
                  iconName='BoxArrowInRight'
                  // color='#'
                  size={96}
                  className='align-top ml-2'
                  style={{
                    width: '1.5em',
                    height: '1.5em'
                  }}
                />
              </span>
              <span>
                LOG OUT
              </span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  )
}
