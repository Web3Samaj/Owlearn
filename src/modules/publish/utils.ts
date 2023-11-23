export type WebhookContext = {
  courseId: string
}

type requestUploadResponse = {
  url: string
  tusEndpoint: string
  asset: {
    id: string
    playbackId: string
    userId: string
    createdAt: number
    status: {
      phase: string
      updatedAt: number
    }
    name: string
    source: {
      type: string
    }
    playbackPolicy: {
      type: 'webhook' | 'public' | 'jwt'
      webhookId: string
    } & WebhookContext
  }
  task: {
    id: string
  }
}

export const uploadVideo = async (
  courseId: string,
  title: string,
  file: File
) => {
  const url = 'https://livepeer.studio/api/asset/request-upload'
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_LIVEPEER_API_KEY}`,
    },
    body: JSON.stringify({
      name: title,
      playbackPolicy: {
        type: 'webhook',
        webhookId: process.env.NEXT_PUBLIC_LIVEPEER_WEBHOOK_ID as string,
        webhookContext: {
          courseId: courseId,
        } as WebhookContext,
      },
    }),
  })
  console.log('response', response)
  const data: requestUploadResponse = await response.json()
  const uploadResponse = await fetch(data.url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'video/mp4',
    },
    body: file,
  })
  if (uploadResponse.ok) {
    // or uploadResponse.status === 200
    return data.asset
  } else {
    throw new Error('upload failed')
  }
}

export const uploadToIPFS = async (body: string) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL as string, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  })
  console.log('response', response)
  const { cid }: { cid: string } = await response.json()
  return cid
}
