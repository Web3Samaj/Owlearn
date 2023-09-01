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
  }
  task: {
    id: string
  }
}

export const uploadVideo = async (title: string, file: File) => {
  const url = 'https://livepeer.studio/api/asset/request-upload'
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_LIVEPEER_API_KEY}`,
    },
    body: JSON.stringify({
      name: title,
    }),
  })
  console.log('response', response)
  const data: requestUploadResponse = await response.json()
  //   {
  //     "url": "https://origin.livepeer.com/api/asset/upload/direct?token=XYZ",
  //     "tusEndpoint": "https://origin.livepeer.com/api/asset/upload/tus?token=XYZ",
  //     "asset": {
  //         "id": "123",
  //         "playbackId": "456", // this is the id you need to play the video
  //         "userId": "213-45",
  //         "createdAt": 1692356553929,
  //         "status": {
  //             "phase": "uploading",
  //             "updatedAt": 1692356553929
  //         },
  //         "name": "Mountain",
  //         "source": {
  //             "type": "directUpload"
  //         }
  //     },
  //     "task": {
  //         "id": "123-gfd-34s"
  //     }
  // }
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
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
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
