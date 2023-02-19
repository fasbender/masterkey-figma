import React from 'react'

const PopularCategories = () => {
  return (
    <div>
      <h1>Explore The Popular Categories</h1>
      <div>
        <img src={process.env.PUBLIC_URL + './assets/category-1.png'} alt="" />
        <img src={process.env.PUBLIC_URL + './assets/category-2.png'} alt="" />
      </div>
    </div>
  )
}

export default PopularCategories