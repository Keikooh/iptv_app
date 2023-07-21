import React , { useEffect, useState } from 'react';
import { getMoviesNowPlaying, getGenresList} from './logic';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStar, faBullhorn } from '@fortawesome/free-solid-svg-icons'
// Styles
import '../../assets/styles/moviesNowPlayingList.css';

// Boostrap styles
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

const MoviesNowPlayingList = () => {

  const [moviesDiv, setMoviesDiv] = useState([]);
  const [genreList, setGenreList] = useState([])
  const [index, setIndex] = useState(0)

  const handlePrevious = () => {
    setIndex( index === 0 ? moviesDiv.length - 1 : index - 1)
  } 

  const handleNext = () => {
    setIndex( index === moviesDiv.length - 1 ? 0 : index + 1)
  }

  const getGenres = async () => {
    const genresList = await getGenresList();
    setGenreList(genresList);
  }
  getGenres()

  useEffect(() => {
    

    const getMoviesList = async () => {
      const data = await getMoviesNowPlaying();

      const moviesItems = data.map((movie) => (

        <Carousel.Item>
          <div className='banner-container'>
            <img id="backdrop_path"src={IMAGE_BASE_URL + movie.backdrop_path}></img>
          </div>
            <Carousel.Caption>
              <div className='container'>
                <img id="poster" src={IMAGE_BASE_URL + movie.poster_path}></img>
                <div className='description-container'>
                <h1>{movie.title}</h1>
              <div className='genres-container'>
                {
                  movie.genre_ids.map( genreId => (
                    <b key={genreId}>{ genreList[genreId] }</b>
                  ))
                }
              </div>
              <p>{movie.overview}</p>
              <div className='details-container'>
                <p><FontAwesomeIcon icon={faBullhorn}/>language: {movie.original_language}</p>
                <p>rating:<b>{movie.vote_average}/10</b></p> 
              </div>
              <div className='buttons-container'>
                <Button variant='danger'><FontAwesomeIcon icon={faPlay}/>watch now</Button>
                <Button variant='outline-warning'><FontAwesomeIcon icon={faStar}/>add to favorites</Button>
              </div>
                </div>
              </div>
            </Carousel.Caption>
        </Carousel.Item>
      ));

      setMoviesDiv(moviesItems);
    };

    getMoviesList();
    
  }, [genreList]);
  

  return (
    <Carousel fade>
      {
        moviesDiv
      }
    </Carousel>
  );
};

export default MoviesNowPlayingList;
