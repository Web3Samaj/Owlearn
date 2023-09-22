import { createPublicClient, http } from 'viem'
import { polygonMumbai } from 'viem/chains'
import { COURSE_CERTIFICATE_ABI } from '@/src/constants/owlearnCourseCertificate'

import { NextApiRequest, NextApiResponse } from 'next'
import { getCourse, getUserCourseProgress } from '@/src/modules/firebase/utils'

const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // get the tokenId from the query params
  const tokenId: bigint = req.query.tokenId
  const courseAddress: `0x${string}` | undefined = req.query.courseAddress
  if (!courseAddress) {
    return 'INVALID REQUEST ENDPOINT'
  }
  // fetching the course Owner
  const publicClient = createPublicClient({
    chain: polygonMumbai,
    transport: http(RPC_URL),
  })

  try {
    const tokenOwnerAddress = await publicClient.readContract({
      address: courseAddress,
      abi: COURSE_CERTIFICATE_ABI,
      functionName: 'ownerOf',
      args: [tokenId],
    })

    const progressData = await getUserCourseProgress(
      courseAddress,
      tokenOwnerAddress
    )

    const courseData = await getCourse(courseAddress)

    if (progressData?.TotalLectureWatched < courseData?.TotalLectures) {
      // prepare the Dynamic image
      const image_url = `data:progress.svg`
      res.status(200).json({
        name: `Progress tracking certificate #${tokenId}`,
        description: `This NFT is a dynamic progress tracker for the User enrolled in the Course $name`,
        image: image_url,
        attributes: [
          {
            trait_type: 'Coure Completed',
            value: 'false',
          },
          {
            trait_type: 'progress',
            value: progressData?.TotalLectureWatched,
            max_value: courseData?.TotalLectures,
          },
        ],
      })
    } else if (progressData?.TotalLectureWatched == courseData?.TotalLectures) {
      const image_url = `data:completed.svg`
      res.status(200).json({
        name: `Certificate #${tokenId} for Course $name`,
        description: `This NFT is a certificate for completing the Course $name by the users after completing all the levels and assignments`,
        image: image_url,
        attributes: [
          {
            trait_type: 'Course Completed',
            value: 'true',
          },
          {
            trait_type: 'progress',
            value: progressData?.TotalLectureWatched,
            max_value: courseData?.TotalLectures,
          },
          {
            display_type: 'number',
            trait_type: 'Ranking',
            value: progressData?.CompletionRank,
          },
          {
            display_type: 'date',
            trait_type: 'Completion Date',
            value: progressData?.CompletedAt,
          },
        ],
      })
    }
  } catch (error) {
    console.log(error)
  }

  // The api is sending back metadata
  // To make our collection compatible with Opensea, we need to follow some Metadata standards
  // when sending back the response from the api
  // More info can be found here: https://docs.opensea.io/docs/metadata-standards
}
