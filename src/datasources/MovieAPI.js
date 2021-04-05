const { RESTDataSource } = require('apollo-datasource-rest');
require('dotenv').config()

class MovieAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://api.themoviedb.org/3';
    }

    async getMoviesByYear({year, page}) {
        try {
            const data = await this.get(
                `/discover/movie?primary_release_year=${year}&page=${page}&api_key=${process.env.MOVIE_API_KEY}`)
            return data
            ? {
                page: data['page'],
                total_results: data['total_results'],
                total_pages: data['total_pages'],
                results: data.results.map(movie => this.getMoviesByYearReducer(movie))
            }
            : {}
        } catch (e) {
            throw e
        }
    }

    getMoviesByYearReducer(movie) {
        try {
            return {
                poster_path: movie.poster_path,
                adult: movie.adult,
                overview: movie.overview,
                release_date: movie.release_date,
                genre_ids: movie.genre_ids,
                id: movie.id,
                original_title: movie.original_title,
                original_language: movie.original_language,
                title: movie.title,
                backdrop_path: movie.backdrop_path,
                popularity: movie.popularity,
                vote_count: movie.vote_count,
                video: movie.video,
                vote_average: movie.vote_average
            }
        } catch (e) {
            throw e
        }
    }
}

module.exports = MovieAPI