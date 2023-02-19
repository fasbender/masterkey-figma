import React from 'react'

const Header = () => {
  return (
    <header className='header'>
        <div className='title'>
            <h1>Headphone</h1>
            <span>For the top band</span>
        </div>
        <div className='header-search'>
            <div className='search-icon'>
                <img src={process.env.PUBLIC_URL + './assets/search.png'} alt="" />
                <span>Search Product</span>
            </div>
            <input type="search" name="" id="" />
        </div>
        <div className='header-icon'>
            <img src={process.env.PUBLIC_URL + './assets/profile_2.png'} alt="" />
            <img src={process.env.PUBLIC_URL + './assets/alarm.png'} alt="" />
            <img src={process.env.PUBLIC_URL + './assets/mail.png'} alt="" />
        </div>
    </header>
  )
}

export default Header