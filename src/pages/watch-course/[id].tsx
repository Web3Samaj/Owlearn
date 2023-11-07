import React, { useEffect, useState } from 'react'
import VideoPlayer from '@/modules/watch-course/components/VideoPlayer'
import Playlist from '@/modules/watch-course/components/Playlist'
import { LectureContextProvider } from '@/modules/watch-course/contexts/LectureContext'
import Image from 'next/image'
import styles from '@/styles/WatchCourse.module.css'
import { getCourse } from '@/src/services/graph/graph'
import { useRouter } from 'next/router'

const defaultCids = [
  'bafkreifami5tmfbt2glxioar5x7gbtm7wdswbcjans2lqy4ur6efrpwpua',
  'bafkreidxbfshubnuz32rzfo4op5nlmbhbt7tfsx2ztvpvtgrt5ow6ll6ii',
]

// TODO: This page should be gated
const WatchCourse = () => {
  const router = useRouter()
  const [cids, setCids] = useState<string[]>([])
  const [open, setOpen] = useState<boolean>(true)

  useEffect(() => {
    if (router.query.id) {
      getCourse(router.query.id as `0x${string}`).then((res) => {
        setCids(res.data.course?.resources?.map((r) => r.resourceURI) || [])
      })
    }
  }, [router.query])

  return (
    <LectureContextProvider>
      <div className="w-full h-full flex relative">
        <div
          className={`${
            open ? 'md:w-3/4 w-1/2' : 'w-full'
          } bg-stone-800  transition-all duration-200 ease-linear`}
        >
          <VideoPlayer />
        </div>
        <div className="absolute w-full">
          <div className="relative h-screen">
            <Image
              src="/asset/watch-course/arrow.svg"
              width={40}
              height={40}
              onClick={() => setOpen(!open)}
              alt="arrow"
              className={`cursor-pointer z-10 absolute top-1/2 ${
                open ? styles.open : styles.close
              } transition-all duration-200 ease-linear`}
            />
          </div>
        </div>
        <div
          className={`${
            open ? 'md:w-1/4 w-1/2' : 'w-0'
          } bg-stone-900 transform transition-all duration-200 ease-linear`}
        >
          <Playlist cids={cids} />
        </div>
      </div>
    </LectureContextProvider>
  )
}

export default WatchCourse
