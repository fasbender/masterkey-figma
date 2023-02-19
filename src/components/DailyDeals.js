import React from 'react'

const DailyDeals = ({ product }) => {
  return (
    <div>
      <h4>Daily Deals</h4>
      <div>
          {product.map(item => {
            return (
              <div className='deals'>
                <img src={item.picture} alt="" />
                <div className='deets'>
                  <span>{item.name}</span>
                  <span>Price ${item.price}</span>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default DailyDeals