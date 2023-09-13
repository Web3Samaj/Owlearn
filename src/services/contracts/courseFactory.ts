import { useAccount, usePublicClient, useWalletClient } from 'wagmi'
import { getAccount, getPublicClient, getWalletClient } from 'wagmi/actions'
import {
  COURSE_FACTORY_ADDRESS,
  COURSE_FACTORY_ABI,
} from '../../constants/courseFactory'
import { decodeFunctionResult, getContract } from 'viem'

export const courseFactory = () => {
  // const { address: account } = useAccount()
  // const publicClient = usePublicClient()
  // const { data: walletClient } = useWalletClient()

  const createCourse = async (
    creatorId: bigint,
    courseName: string,
    courseSymbol: string,
    courseURI: string,
    courseNFTURIs: string[],
    certificateBaseURI: string
  ) => {
    try {
      const { address: account } = getAccount()
      const publicClient = getPublicClient()
      const walletClient = await getWalletClient()

      /** DIRECT CONTRACT OBJECT INTERACTION METHOD */

      // if (!walletClient) {
      //   return
      // }
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
      return error
      console.log(error)
    }
  }
}
