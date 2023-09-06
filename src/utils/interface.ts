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
