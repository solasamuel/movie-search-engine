import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://online-movie-database.p.rapidapi.com/title/v2/find',
    headers: {
        'X-RapidAPI-Key': '4c5abe1032msh1bf8d3c2a94d0f3p152d94jsna9947548674c',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getData: (searchQuery) =>
        instance({
            'method': 'GET',
            'params': {
                'title': searchQuery,
                'limit': '20',
                'sortArg': 'moviemeter,asc'
            },
        })
}