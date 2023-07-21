import React from 'react'
import MoviesList from './moviesList.jsx'
import Navbar from './navbar.jsx'
import MoviesNowPlayingList from './moviesNowPlaying/index.jsx'

import '../assets/styles/main.css'

const mainContainer = () => {
  return (
    <div>
      <Navbar/>
      <MoviesNowPlayingList/>
      <div className='movies-container'>
        <MoviesList/>
      </div>
      
    </div>
  )
}

export default mainContainer