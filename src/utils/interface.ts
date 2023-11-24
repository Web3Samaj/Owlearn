export interface IUploadComp {
  idx: string
  video: File | null
  title: string
}

export interface IrestInput {
  courseTitle: string
  description: string
  category: string
  thumbnail: File | null
  price: number | string
}

export interface IUpload {
  deleteComp: (idx: string) => void
  idx: string
  handleVideoChange: (idx: string, vid: File) => void
  handleTitleChange: (idx: string, title: string) => void
  vid: File | null
  tit: string
}

interface Assignment {
  id: string
  alinks: string
}

interface Resource {
  id: string
  rlinks: string
}

type Video = {
  id: string
  uri: string
  title: string
  playbackId: string
  vdescription: string
  assignments: Assignment[]
  resources: Resource[]
}

export type CourseData = {
  courseId: string
  totalearnings: number
  enrolledStudent: number
  prize: number
  rating: number
  courseName: string
  img: string
  description: string
  allvideos: Video[]
}

export type ViewCourseData = {
  courseId: string
  totalearnings: number
  enrolledStudent: number
  prize: number
  rating: number
  courseName: string
  img: string
  description: string
  allvideos: { id: string; title: string }[]
}
