import { gql } from '@apollo/client'

// query the courses for explore page
// Have to assign how many records we want
export const allCourseQuery = gql`
  query ($first: Int) {
    courses(first: $first) {
      id
      creatorId
      courseId
      address
      certificateAddress
      courseURI
      mintModule
      name
      resourceAddress
      symbol
    }
  }
`
// query the courses when serarched , pass the string
// Have to assign how many records we want
export const allCourseSearchQuery = gql`
  query ($first: Int, $skip: Int, $search: String) {
    courses(
      first: $first
      skip: $skip
      where: { name_contains_nocase: $search }
    ) {
      id
      creatorId
      courseId
      address
      certificateAddress
      courseURI
      mintModule
      name
      resourceAddress
      symbol
    }
  }
`

export const indivCourseQuery = gql`
  query ($id: String) {
    course(id: "") {
      address
      certificateAddress
      certificate {
        certificateBaseURI
        certificateName
        certificateSymbol
      }
      courseId
      courseURI
      creatorId
      educator {
        educatorId
        username
        address
      }
      id
      mintModule
      name
      symbol
      resourceAddress
      resources {
        resourceId
        resourceURI
      }
    }
  }
`

// Get a specific resource
export const indivResourceQuery = gql`
  query ($id: String) {
    resource(id: $id) {
      resourceId
      resourceURI
    }
  }
`

export const indivCertificateQuery = gql`
  query ($id: String) {
    certificate(id: $id) {
      certificateAddress
      certificateBaseURI
      certificateName
      certificateSymbol
      enrolledUsers {
        address
      }
      course {
        courseId
        courseURI
        name
        address
      }
    }
  }
`

// Query all the enrolled courses for the student
export const allEnrolledCourseQuery = gql`
  query ($id: String) {
    user(id: $id) {
      username
      owlId
      address
      enrolledCourses {
        id
        certificate {
          certificateName
          certificateBaseURI
        }
        courseURI
        name
      }
    }
  }
`

// Query all educators
export const allEducatorQuery = gql`
  query ($first: Int) {
    educators(first: $first) {
      address
      educatorId
      username
      id
      courses {
        courseURI
        name
        address
        courseId
      }
    }
  }
`

export const indivEducatorQuery = gql`
  query ($id: String) {
    educator(id: $id) {
      educatorId
      id
      username
      address
      courses {
        address
        courseId
        name
        courseURI
      }
    }
  }
`
