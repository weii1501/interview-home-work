import {SideBar} from "../components/SideBar";
import RightBar from '../components/RightBar'
import Tab from '../components/Tab'
import React from 'react'

const tabs = [
  { name: 'SIMPLE BLOG PAGE', active: true },
  // { name: 'POST', active: false }
  // { name: 'TRENDING', active: false }
]

export default function MainLayout ({ children }) {
  const [activeTab, setActiveTab] = React.useState('SIMPLE BLOG PAGE')

  return (
    <div className='py-4 min-vh-100'>
      <div className='container'>
        <div className='row'>
          <SideBar />
          <main className='col-6'>
            <main className='px-1'>
              <div className='main-content'>
                <ul className='tabs mb-2 position-sticky w-100 d-flex bg-white rounded-4 shadow-sm overflow-hidden sticky-top'>
                  {tabs.map((tab, index) => (
                    <Tab
                      key={index}
                      tab={tab}
                      activeTab={activeTab === tab.name}
                      setActiveTab={setActiveTab}
                    />
                  ))}
                </ul>
              </div>
              {children}
            </main>

          </main>
          <div className='col-3'>
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  )
}
