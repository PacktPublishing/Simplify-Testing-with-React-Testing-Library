const { GraphQLServer } = require('graphql-yoga')

const sampleRates = [
  {
    currency: 'AAVE',
    rate: '0.00537309423064007',
    name: null
  },
  {
    currency: 'AED',
    rate: '3.67298',
    name: 'United Arab Emirates Dirham'
  },
  {
    currency: 'AFN',
    rate: '77.383416',
    name: 'Afghan Afghani'
  }
]

const typeDefs = `
type Query {
  rates: [ExchangeRate]
}

type Mutation {
  createExchangeRate(currency: String!, rate: String!, name: String!): ExchangeRate
}

type ExchangeRate {
  currency: String
  rate: String
  name: String
}
`

const resolvers = {
  Query: {
    rates: () => sampleRates
  },
  Mutation: {
    createExchangeRate: (parent, args) => {
      args.id = 100
      sampleRates.push(args)
      return args
    }
  }
}

const options = { port: 4000 }
const server = new GraphQLServer({ typeDefs, resolvers })

server.start(options, () =>
  console.log(`Server is running on localhost:${options.port}`)
)
