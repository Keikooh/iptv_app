const API = 'https://api.themoviedb.org/3/trending/'
const API_KEY = '/week?api_key=eec6f8d0f8ecfe34660aa9887ed131aa'


export const getMoviesNowPlaying = async (media_type) => {
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

