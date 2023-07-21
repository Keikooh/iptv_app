const API = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=eec6f8d0f8ecfe34660aa9887ed131aa'

export const getMoviesNowPlaying = async () => {
  try {
    const response = await fetch(`${API}movie/now_playing${API_KEY}`);
    if (response.ok) {
      const data = await response.json();
      const movies = data.results;
      return movies;
    } else {
      throw new Error('Ups! Something went wrong');
    }
  } catch (error) {
    console.log(error);
  }
};

export const getGenresList = async () => {
  try {
    const response = await fetch(`${API}genre/movie/list${API_KEY}`);
    if(response.ok){
      const data = await response.json();
      const genreList = {};
      data.genres.forEach(genre => {
        genreList[genre.id] = genre.name;
      });

      console.log(genreList);
      return genreList;
    }else{
      throw new Error('Ups! Something went wrong');
    }

  } catch (error) {
    console.error(error);
  }
}
