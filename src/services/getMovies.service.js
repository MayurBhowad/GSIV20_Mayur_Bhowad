import axios from 'axios';

const API_URI = 'https://api.themoviedb.org/3/movie/popular?api_key=ab5d36524ab064cd3e54016673602171&page=1'

export const getAllMovies = async (string) => {
    let data = await axios.get(API_URI);
    return data.data.page
}