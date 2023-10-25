import React, {useEffect, useState} from 'react'
import '../../assets/styles/Trending.css'
import { Link } from 'react-router-dom';

import {getMoviesNowPlaying} from './logic.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeart,faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w1280/'

const TrendingList = () => {
    const [movies, setMovies] = useState([])
    const [mediaSelected, setMediaSelected] = useState('tv')

    useEffect(() => {
        const getMoviesList = async (media_type) => {
            const data = await getMoviesNowPlaying(media_type);
            setMovies(data)
        }

        getMoviesList(mediaSelected)
    },[mediaSelected])
    

  return (
    <div className='trending-list'>
        <div className='box'>
        <div className='section-title'>
            <FontAwesomeIcon icon={faArrowTrendUp} />
            <h2>Trends Now</h2>
            
        </div>
        <hr/>
        </div>
       
        <div className='list'>
        {
            movies.map((movie) => (
                <div className='movie' key={movie.id}>
                    <img
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                    alt="First slide"
                    />
                    <div className='container'>
                    <h4 title={movie.name}>
                        {
                            movie.name.length < 21 ? movie.name : `${movie.name.substr(0,21)}...`
                        }
                    </h4>
                    <div className='details'>
                        <p id='release-date'>{movie.first_air_date}{movie.release_date}</p>
                        <p id='vote-average'>
                            <FontAwesomeIcon className='fa-icon' icon={faStar}/> {movie.vote_average}
                        </p>
                    </div>
                    </div>
                </div>
            ))
        } 
        
        </div>
    </div>
  )
}

export default TrendingList