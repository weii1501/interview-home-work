import React from 'react'

export default function Tab ({ tab, activeTab, setActiveTab }) {
  return (
    <li
      className={`tab w-33 flex-fill p-3 text-center ${activeTab ? 'active' : ''}`}
      style={{ fontSize: 13, height: 'max-content' }}
      onClick={() => setActiveTab(tab.name)}
    >
      {tab.name}
    </li>
  )
}
