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
