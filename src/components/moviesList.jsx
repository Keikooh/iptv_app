import React, {useEffect} from 'react'

const API = 'https://api.themoviedb.org/3/movie/11?api_key=API_KEY'

const getMovies = async () => {
    try {
        const movies = await fetch(API)
        console.log(movies)
    } catch (error) {
        console.log(error)
    }

}

const moviesList = () => {

    useEffect(() => {
        getMovies()
    })
    
  return (
    <div>
        {

        }
    </div>
  )
}

export default moviesList