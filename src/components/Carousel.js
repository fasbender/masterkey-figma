import React from 'react'
import { AiFillStar } from "react-icons/ai";

const Carousel = ({ product }) => {

  return (
    <div className='carousel'>
        {product.map(item => {
            return (
                
                    <div className='card' key={item._id}>
                        <img src={item.picture} alt="" />
                        <div className='card-body'>
                            <span>{item.name}</span>
                            <span>Price ${item.price}</span>
                        </div>
                        <div className='card-footer'>
                            <AiFillStar />
                            <span>{item.rating}</span>
                        </div>
                    </div>
                
            )
        })}
    </div>
  )
}

export default Carousel