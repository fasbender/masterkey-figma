import React from 'react'
import SideBar from '../components/SideBar'
import MainContent from './MainContent'
import './main.css'

const HomePage = () => {
  return (
    <div className='home'>
        <SideBar />
        <MainContent />
    </div>
  )
}

export default HomePage