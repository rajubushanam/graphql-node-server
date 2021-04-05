module.exports = `
type Query {
    moviesByYear(year: Int!, page: Int!): Movies!
}
type Movies {
    page: Int!,
    total_results: Int!,
    total_pages: Int!,
    results: [Movie]!
}
type Movie {
    poster_path: String,
    adult: Boolean!,
    overview: String!,
    release_date: String!,
    genre_ids: [Int!]!,
    id: Int!,
    original_title: String!,
    original_language: String!,
    title: String!,
    backdrop_path: String,
    popularity: Int!,
    vote_count: Int!,
    video: Boolean!,
    vote_average: Int!
}
`