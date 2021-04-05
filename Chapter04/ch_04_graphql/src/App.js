import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Table from './Table'

const client = new ApolloClient({
  // uri: 'production url',
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Table />
    </ApolloProvider>
  )
}

export default App
