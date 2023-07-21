import React, {useEffect, useState} from 'react'
import '../assets/styles/moviesList.css'

// API DE THE MOVIES DB
const API = 'https://api.themoviedb.org/3/trending/'
const API_KEY = '/week?api_key=eec6f8d0f8ecfe34660aa9887ed131aa'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w1280/'

const getMoviesNowPlaying = async (media_type) => {
    try {
        const response = await fetch(`${API}${media_type}${API_KEY}`)
        if(response.ok){
            const data = await response.json();
            const movies = data.results;
            return movies
        }
        else{
            throw new Error('Ups! Something went wrong');
        }
    } catch (error) {
        console.log(error)
    }
}

const moviesList = () => {
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
    <div className>
        <div className='box'>
          <h4>Trending</h4>
          <div className='buttons-control'>
            <button id='first-button' onClick={() => { setMediaSelected('tv')}}>tv shows</button>
            <button id='second-button' onClick={() => { setMediaSelected('movie')}}>movies</button>
            <button id='third-button' onClick={() => { setMediaSelected('all')}}>all</button>
          </div>
        </div>
        <hr/>
        <div className='list'>
        {
            movies.map((movie) => (
                <div className='movie' key={movie.id}>
                    <img
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                    alt="First slide"
                    />
                    <h6>{movie.name}{movie.title}</h6>
                    <p>{movie.first_air_date}{movie.release_date}</p>
                </div>
            ))
        } 
        
        </div>
    </div>
  )
}

export default moviesList