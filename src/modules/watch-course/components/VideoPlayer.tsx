import { Player } from '@livepeer/react'
import { useContext } from 'react'
import LectureContext from '@/modules/watch-course/contexts/LectureContext'

export default function Home(): JSX.Element {
  const lectureContext = useContext(LectureContext)
  return (
    <div className="w-full h-full">
      <Player
        title={lectureContext.title}
        playbackId={lectureContext.playbackId}
        showPipButton
        objectFit="cover"
        priority
        autoPlay
      />
      <div className="p-2">
        <p className="text-white/50 text-3xl">{lectureContext.title}</p>
      </div>
    </div>
  )
}
