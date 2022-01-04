import axios from 'axios';

const API_URI = ''

export const getAllMovies = async (string) => {
    let data = await axios.get(API_URI);
    console.log(data.data.page);
    return data
}