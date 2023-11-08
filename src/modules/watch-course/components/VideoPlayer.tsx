import { Player } from '@livepeer/react'
import { useContext } from 'react'
import LectureContext from '@/modules/watch-course/contexts/LectureContext'
import AuthContext from '@/modules/auth/contexts/AuthContext'

export default function Home(): JSX.Element {
  const lectureContext = useContext(LectureContext)
  const authContext = useContext(AuthContext)
  return (
    <div className="w-full h-full">
      <Player
        title={lectureContext.title}
        playbackId={lectureContext.playbackId}
        accessKey={authContext.getJwtToken() || ''}
        showPipButton
        objectFit="contain"
        priority
        aspectRatio="16to9"
      />
      <div className="p-2 self-center">
        <p className="text-white/50 text-3xl">{lectureContext.title}</p>
      </div>
    </div>
  )
}
