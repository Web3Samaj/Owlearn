import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { allCourseQuery } from './query'
const APIURL =
  'https://api.studio.thegraph.com/query/46388/owlearn/version/latest'

const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
})

// Caching can be done too , for almost instant response

export const getCourses = () => {
  client
    .query({
      query: allCourseQuery,
      variables: {},
    })
    .then((res) => {
      console.log(res.data)
      return res.data
    })
    .catch((err) => {
      console.error(err)
      return err
    })
}
