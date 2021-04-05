const { GraphQLServer } = require('graphql-yoga')

const fakeEmployeeDB = [
  {
    id: 1,
    name: 'John Doe',
    department: 'Financial',
    title: 'Loan Officer'
  },
  {
    id: 2,
    name: 'Sam Jones',
    department: 'Engineering',
    title: 'Engineering Manager'
  },
  {
    id: 3,
    name: 'Amanda Sims',
    department: 'Human Resources',
    title: 'Manager'
  }
]

const typeDefs = `
type Query {
  employees: [Employee]
}

type Employee {
  id: String
  name: String
  department: String
  title: String
}
`

const resolvers = {
  Query: {
    employees: () => fakeEmployeeDB
  }
}

const options = { port: 4000 }
const server = new GraphQLServer({ typeDefs, resolvers })

server.start(options, () =>
  console.log(`Server is running on localhost:${options.port}`)
)
