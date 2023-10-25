import React , { useEffect, useState } from 'react';
import { getMoviesNowPlaying, getGenresList} from './logic';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faFilm, faStar } from '@fortawesome/free-solid-svg-icons'
// Styles
import '../../assets/styles/Carousel.css';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

const SeriesSlider = () => {

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

      const moviesItems = data.map((serie) => (


        <div className="carousel-item">
          <div className='banner-container'>
            <img id="backdrop_path" src={IMAGE_BASE_URL + serie.backdrop_path} alt="tv show banner" />
          </div>
          <div className='serie-details'>
            <div className='genres'>
              <li id='rank'><i id='star'><FontAwesomeIcon icon={faStar}/></i>{serie.vote_average}</li>
              <div className='list-genres'>
              {
                 serie.genre_ids.map( genreId => (
                    <b key={genreId}>| { genreList[genreId] }</b>
                ))
              }
              </div>
            </div>
            <h1>{serie.name}</h1>
            <p id='overview'>
              {
                serie.overview.length > 420 ? `${serie.overview.substr(0,420)}...` : serie.overview
              }
            </p>
            <div className='buttons-container'>
              <button id='watch-button'><FontAwesomeIcon icon={faPlay}/><p>WATCH NOW</p></button>
              <button id='add-button'><FontAwesomeIcon icon={faFilm}/><p>TRAILER</p></button>
            </div>
          </div>
        </div>
      ));
      setMoviesDiv(moviesItems);
    };
    getMoviesList();
  }, [genreList]);

  return (
    <div className='carousel'>
      
      <article>
        {
          moviesDiv[index]
        }
      </article>
      <section className="control-buttons">
        <button className ="control-button" onClick={() => handlePrevious()}>&#8249;</button>
        <button className ="control-button" onClick={() => handleNext()}>&#8250;</button>
      </section>
      
    </div>
  );
};

export default SeriesSlider;