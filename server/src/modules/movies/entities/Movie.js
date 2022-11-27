const { IMAGE_BASE_PATH } = require('../../../config');
const format = require('date-format');


class Movie {
    constructor(movie) {
        this.movie = movie;
        this.id = movie.id;
        this.title = movie.title;
        this.posterPath = `${IMAGE_BASE_PATH}${movie.poster_path}`;
    }

    releaseDate(params) {
        if (params && params.format) {
            return format('dd:mm:yyyy', new Date(this.movie.release_date))
        }
        return this.movie.release_date;
    }
}

module.exports = {
    Movie
}