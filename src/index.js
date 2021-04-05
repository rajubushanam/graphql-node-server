const {ApolloServer, gql} = require('apollo-server-express')
const express = require('express')
const types = require('./types')
const resolvers = require('./resolvers')
const MovieAPI = require('./datasources/MovieAPI')
const app = express()
const PORT = 3005

const typeDefs = gql`${types}`

console.log("typedefs", types);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    movieByYearAPI: new MovieAPI()
  })
})

server.applyMiddleware({app, path: '/graphql'})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))