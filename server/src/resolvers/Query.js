const { getPopular } = require('../modules/movies');

async function getMovies(parent, args) {
    const { pageNumber } = args;
    const data = await getPopular(pageNumber);

    return data;
}

module.exports = {
    getMovies,
}