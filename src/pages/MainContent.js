import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Carousel from '../components/Carousel'
import PopularCategories from '../components/PopularCategories'
import DailyDeals from '../components/DailyDeals'
import axios from 'axios';

const MainContent = () => {

  const [product, setProduct] = useState([])


    useEffect(() => {
        const products = async() => {
            try {
                const response = await axios.get('https://api.hiring.masterkey.tech/api/v1/product/get')
                setProduct(response.data.products)
            } catch (error) {
                console.log(error)
            }
        }

        products()
    }, [])

  return (
    <div className='mainContent'>
        <Header />
        <br /><br />
        <HeroSection />
        <br /><br />
        <div className='bottomContent'>
          <div>
            <div>
              <Carousel product={product} />
              <br /><br />
            </div>
            <div>
              <PopularCategories />
              <br /><br />
            </div>
          </div>
          <div>
            <DailyDeals product={product} />
          </div>
        </div>
    </div>
  )
}

export default MainContent