import { CourseMetadata } from '../constants/metadata_formats'

async function fetchCourseData(uri: string) {
  const res = await fetch(uri)
  const data: CourseMetadata = await res.json()
  return data
}

export { fetchCourseData }
