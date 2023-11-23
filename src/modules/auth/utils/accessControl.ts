import { EDUCATOR_BADGE_ADDRESS } from '@/src/constants/educatorBadge'
import { getUserEnrolledCourses } from '@/src/services/graph/graph'
import { Network, Alchemy } from 'alchemy-sdk'

const ALCHEMY_API_KEY: any = process.env.ALCHEMY_ID
const contractAddress = EDUCATOR_BADGE_ADDRESS

export const checkEducator = async (
  userAddress: string
): Promise<boolean | undefined> => {
  try {
    const settings = {
      apiKey: ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
      network: Network.MATIC_MUMBAI, // Replace with your network.
    }

    const alchemy = new Alchemy(settings)

    console.log('Checking for the NFT collection')
    const response = await alchemy.nft.verifyNftOwnership(
      userAddress,
      contractAddress
    )
    // console.log(response)
    return response
  } catch (error) {
    console.log(error)
  }
}

export const checkCourseAccessStatus = async (
  userAddress: string,
  courseId: string //Address
): Promise<boolean | undefined> => {
  try {
    // get User Enrolled courses
    const data = await getUserEnrolledCourses(userAddress)

    //TODO: need to check the output of data and accordingly define this
    const courses = data.enrolledCourses

    let isEnrolled = false

    courses.forEach((course: { id: string }) => {
      isEnrolled = course.id == courseId
      if (isEnrolled) {
        return
      }
    })

    return isEnrolled
  } catch (error) {
    console.log(error)
  }
}
