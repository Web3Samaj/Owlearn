import {
  ApolloClient,
  ApolloQueryResult,
  InMemoryCache,
  gql,
} from '@apollo/client'
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

export type SearchCourseResult = {
  __typename: 'Course'
  id: `0x${string}`
  educator: {
    __typename: 'Educator'
    username: string
  }
  courseId: string
  address: `0x${string}`
  certificateAddress: `0x${string}`
  courseURI: string
  mintModule: string | null
  name: string
  resourceAddress: `0x${string}`
  symbol: string
}

export type SearchCourseResultData = {
  courses: SearchCourseResult[]
}

export const searchCourses = async (
  first: number,
  skip: number,
  searchQuery: string
): Promise<ApolloQueryResult<SearchCourseResultData>> => {
  return await client.query({
    query: allCourseSearchQuery,
    variables: {
      first: first,
      skip: skip,
      search: searchQuery,
    },
  })
}

export type CourseResult = {
  __typename: 'Course'
  address: `0x${string}`
  certificateAddress: `0x${string}`
  certificate: {
    __typename: 'Certificate'
    certificateBaseURI: string
    certificateName: string
    certificateSymbol: string
  }
  courseId: string
  courseURI: string
  creatorId: string
  educator: {
    __typename: 'Educator'
    educatorId: string
    username: string
    address: string
  }
  id: string
  mintModule: string | null
  name: string
  symbol: string
  resourceAddress: `0x${string}`
  resources: {
    __typename: 'Resource'
    resourceId: string
    resourceURI: string
  }[]
}

export type CourseResultData = {
  course: CourseResult | null
}

export const getCourse = async (
  courseAddress: `0x${string}`
): Promise<ApolloQueryResult<CourseResultData>> => {
  return await client.query({
    query: indivCourseQuery,
    variables: {
      id: courseAddress,
    },
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

type EducatorResult = {
  educatorId: string
  id: string
  username: string
  address: `0x${string}`
  courses: {
    __typename: 'Course'
    address: `0x${string}`
    courseId: string
    name: string
    courseURI: string
  }[]
}

type EducatorResultData = {
  educator: EducatorResult | null
}

export const getEducator = async (
  educatorId: string
): Promise<ApolloQueryResult<EducatorResultData>> => {
  return await client.query({
    query: indivEducatorQuery,
    variables: {
      id: educatorId,
    },
  })
}

export type EnrolledCourseResult = {
  __typename: 'User'
  username: string
  owlId: string
  address: `0x${string}`
  enrolledCourses: {
    __typename: 'Course'
    id: `0x${string}`
    certificate: {
      __typename: 'Certificate'
      certificateName: string
      certificateBaseURI: string
    }
    courseURI: string
    name: string
  }[]
}

export type EnrolledCourseResultData = {
  user: EnrolledCourseResult | null
}

export const getEnrolledCourses = async (
  studentId: string
): Promise<ApolloQueryResult<EnrolledCourseResultData>> => {
  return await client.query({
    query: allEnrolledCourseQuery,
    variables: {
      id: studentId,
    },
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
