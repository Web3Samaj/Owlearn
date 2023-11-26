export type CourseMetadata = {
  name: string
  description: string
  thumbnailURI: string
  language: string
  extraMetadataURI: string
  courseContent?: string
  attributes: [{ [key: string]: string }]
}

export type ResourceMetadata = {
  name: string
  playbackId: string
  description?: string
  image: string
  assignmentURIs?: string[]
  externalURIs?: string[]
}
