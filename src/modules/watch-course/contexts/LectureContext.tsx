import { createContext, useState } from 'react'

interface LectureContextProps {
  lectureIndex: number
  title: string
  playbackId: string
  setLectureIndex: (index: number) => void
  setTitle: (title: string) => void
  setPlaybackId: (playbackId: string) => void
  completed: Map<number, boolean>
  setCompleted: (completed: Map<number, boolean>) => void
}

const LectureContext = createContext<LectureContextProps>({
  lectureIndex: 0,
  title: '',
  playbackId: '',
  setLectureIndex: () => {},
  setTitle: () => {},
  setPlaybackId: () => {},
  completed: new Map(),
  setCompleted: () => {},
})

export const LectureContextProvider = ({ children }: any) => {
  const [lectureIndex, setLectureIndex] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [playbackId, setPlaybackId] = useState<string>('')
  const [completed, setCompleted] = useState<Map<number, boolean>>(new Map())

  return (
    <LectureContext.Provider
      value={{
        lectureIndex,
        title,
        playbackId,
        setLectureIndex,
        setTitle,
        setPlaybackId,
        completed,
        setCompleted,
      }}
    >
      {children}
    </LectureContext.Provider>
  )
}

export default LectureContext
