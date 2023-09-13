import { useAccount, usePublicClient, useWalletClient } from 'wagmi'
import { getAccount, getPublicClient, getWalletClient } from 'wagmi/actions'
import {
  COURSE_FACTORY_ADDRESS,
  COURSE_FACTORY_ABI,
} from '../../constants/courseFactory'
import { decodeFunctionResult, getContract } from 'viem'

export const courseFactory = async () => {
  const { address: account } = getAccount()
  const publicClient = getPublicClient()
  const walletClient = await getWalletClient()
  if (!walletClient) {
    return
  }
  const courseFactory = getContract({
    address: COURSE_FACTORY_ADDRESS,
    abi: COURSE_FACTORY_ABI,
  })

  const createCourse = async (
    creatorId: bigint,
    courseName: string,
    courseSymbol: string,
    courseURI: string,
    courseNFTURIs: string[],
    certificateBaseURI: string
  ): Promise<[`0x${string}`, bigint] | undefined> => {
    try {
      /** DIRECT CONTRACT OBJECT INTERACTION METHOD */

      // const courseFactory = getContract({
      //   address: COURSE_FACTORY_ADDRESS,
      //   abi: [...COURSE_FACTORY_ABI],
      //   walletClient: walletClient,
      //   publicClient,
      // })
      // const data = await courseFactory.simulate.createCourse([
      //   creatorId,
      //   courseName,
      //   courseSymbol,
      //   courseURI,
      //   courseNFTURIs,
      //   certificateBaseURI,
      // ])

      /** PUBLIC CLIENT INTERACTION METHOD */

      const data = await publicClient.simulateContract({
        account,
        address: COURSE_FACTORY_ADDRESS,
        abi: COURSE_FACTORY_ABI,
        functionName: 'createCourse',
        args: [
          creatorId,
          courseName,
          courseSymbol,
          courseURI,
          courseNFTURIs,
          certificateBaseURI,
        ],
      })
      if (!walletClient) {
        return
      }
      const tx = await walletClient.writeContract(data.request)
      console.log('Transaction Sent')
      const transaction = await publicClient.waitForTransactionReceipt({
        hash: tx,
      })
      console.log(transaction)
      console.log(data.result)
    } catch (error) {
      console.log(error)
    }
  }

  const getCourse = async (
    courseId: bigint
  ): Promise<`0x${string}` | undefined> => {
    try {
      const { address: account } = getAccount()
      const publicClient = getPublicClient()
      const result = await publicClient.readContract({
        account,
        address: COURSE_FACTORY_ADDRESS,
        abi: COURSE_FACTORY_ABI,
        functionName: 'getCourse',
        args: [courseId],
      })
      return result
    } catch (error) {
      console.log(error)
    }
  }
}
