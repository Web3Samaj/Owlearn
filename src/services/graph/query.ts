// query the courses for explore page
export const allCourseQuery = `
query($first: Int) {
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
