import React from 'react'
import VideoPlayer from '@/modules/watch-course/components/VideoPlayer'
import Playlist from '@/modules/watch-course/components/Playlist'
import { LectureContextProvider } from '@/modules/watch-course/contexts/LectureContext'
import Image from 'next/image'
import styles from '@/styles/WatchCourse.module.css'

const defaultCids = [
  'bafkreifami5tmfbt2glxioar5x7gbtm7wdswbcjans2lqy4ur6efrpwpua',
  'bafkreidxbfshubnuz32rzfo4op5nlmbhbt7tfsx2ztvpvtgrt5ow6ll6ii',
]

const WatchCourse = () => {
  const [cids, setCids] = React.useState<string[]>([...defaultCids])
  const [open, setOpen] = React.useState<boolean>(true)
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
