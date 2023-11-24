import { fetchCourseData } from '@/src/utils'
import { useEffect, useState } from 'react'

export function CourseThumbnail({ uri }: { uri: string }) {
  const [src, setSrc] = useState<string>('')
  useEffect(() => {
    fetchCourseData(uri).then((res) => {
      setSrc(res.thumbnailURI)
    })
  }, [uri])
  return (
    <img
      src={src}
      alt="courseimg"
      loading="lazy"
      draggable="false"
      className={` md:rounded-md rounded-xl px-2 w-[5rem]`}
    />
  )
}
