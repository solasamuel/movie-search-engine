import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://movies-tvshows-data-imdb.p.rapidapi.com/',
    headers: {
        'x-rapidapi-host':'movies-tvshows-data-imdb.p.rapidapi.com',
        'x-rapidapi-key': '4c5abe1032msh1bf8d3c2a94d0f3p152d94jsna9947548674c'
    },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getData: (searchQuery) =>
    instance({
        'method':'GET',
        'params': {
            'type': 'get-movies-by-title',
            'title': searchQuery,
        },
    })
}