import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import {
  allCourseQuery,
  allCourseSearchQuery,
  allEducatorQuery,
  allEnrolledCourseQuery,
  indivCertificateQuery,
  indivCourseQuery,
  indivEducatorQuery,
  indivResourceQuery,
} from './query'
const APIURL =
  'https://api.studio.thegraph.com/query/46388/owlearn/version/latest'

const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
})

// Caching can be done too , for almost instant response

export const getAllCourses = (courseToFetch: number) => {
  client
    .query({
      query: allCourseQuery,
      variables: {
        first: courseToFetch,
      },
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

export const searchCourses = (courseToFetch: number, searchQuery: string) => {
  client
    .query({
      query: allCourseSearchQuery,
      variables: {
        first: courseToFetch,
        search: searchQuery,
      },
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

export const getCourse = (courseId: string) => {
  client
    .query({
      query: indivCourseQuery,
      variables: {
        id: courseId,
      },
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

export const getResource = (resorceId: string) => {
  client
    .query({
      query: indivResourceQuery,
      variables: {
        id: resorceId,
      },
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

export const getCertificate = (certificateId: string) => {
  client
    .query({
      query: indivCertificateQuery,
      variables: {
        id: certificateId,
      },
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

export const getEducator = (educatorId: string) => {
  client
    .query({
      query: indivEducatorQuery,
      variables: {
        id: educatorId,
      },
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

export const getEnrolledCourses = (studentId: string) => {
  client
    .query({
      query: allEnrolledCourseQuery,
      variables: {
        id: studentId,
      },
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

export const getAllEducators = (eduToFetch: string) => {
  client
    .query({
      query: allEducatorQuery,
      variables: {
        id: eduToFetch,
      },
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
