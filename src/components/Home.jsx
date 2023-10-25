import React from 'react'
import TrendingList from './Trending/index.jsx'
import SeriesSlider from './Carousel/index.jsx'

import '../assets/styles/main.css'

const home = () => {
  return (
    <>
      <SeriesSlider/>
      <div className='movies-container'>
        <TrendingList/>
      </div>
    </>
  )
}

export default home