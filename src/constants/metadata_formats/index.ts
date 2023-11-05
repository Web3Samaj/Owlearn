export type CourseMetadata = {
  name: string
  description: string
  thumbnailURI: string
  language: string
  extraMetadataURI: string
  courseContent?: string
  attributes: [{ [key: string]: string }]
}
