import React from 'react'
import { AiFillStar } from "react-icons/ai";

const HeroSection = () => {
  return (
    <div className='hero'>
        <div className='popular'>
            <div>
                <img src={process.env.PUBLIC_URL + './assets/preview.png'} alt="" />
            </div>
            <div className='content'>
                <div>
                    <h3>Beats Studio3 Wireless Headphone</h3>
                </div>
                <div>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <span>( 200+ Reviews )</span>
                </div>
                <div>
                    <p>Ergonomic or cupe with on-oor controls up to 22 hours of tening time. Apple Wi crip & Closs </p>
                </div>
                <div>
                    <span>Price $ 450.55</span>
                </div>
                <div className='bottom'>
                    <div><img src={process.env.PUBLIC_URL + './assets/favorite.png'} alt="" /></div>
                    <button>Add to cart</button>
                    <button>Buy Now</button>
                </div>
            </div>
        </div>
        <div className='featured'>
            <img src={process.env.PUBLIC_URL + './assets/featured.png'} alt="" />
        </div>
    </div>
  )
}

export default HeroSection