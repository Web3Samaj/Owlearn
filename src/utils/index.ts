import { CourseMetadata } from '../constants/metadata_formats'
import { getJSONFromIPFS } from '../modules/ipfs/utils'

async function fetchCourseData(uri: string) {
  const data = await getJSONFromIPFS<CourseMetadata>(uri)
  return data
}

export { fetchCourseData }
