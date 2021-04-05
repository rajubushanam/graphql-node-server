const resolvers = {
    Query: {
        moviesByYear: (_, {page, year}, {dataSources}) => {
            return dataSources.movieByYearAPI.getMoviesByYear({page, year})
        }
    }
}

module.exports = resolvers