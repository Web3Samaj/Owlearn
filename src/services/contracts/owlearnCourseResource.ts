import { useAccount, usePublicClient, useWalletClient } from 'wagmi'
import { getAccount, getPublicClient, getWalletClient } from 'wagmi/actions'
import { COURSE_RESOURCE_ABI } from '../../constants/owlearnCourseResource'
import { decodeFunctionResult, getContract } from 'viem'

export const courseResource = async (
  COURSE_RESOURCE_ADDRESS: `0x${string}`
) => {
  const { address: account } = getAccount()
  const publicClient = getPublicClient()
  const walletClient = await getWalletClient()
  if (!walletClient) {
    return
  }

  const courseResource = getContract({
    address: COURSE_RESOURCE_ADDRESS,
    abi: COURSE_RESOURCE_ABI,
  })

  const editCourseURI = async (newCourseURI: string) => {
    const data = await publicClient.simulateContract({
      account,
      address: COURSE_RESOURCE_ADDRESS,
      abi: COURSE_RESOURCE_ABI,
      functionName: 'setBaseURI',
      args: [newCourseURI],
    })

    if (!walletClient) {
      return
    }
    const tx = await walletClient.writeContract(data.request)
    console.log('Transaction Sent')
    const transaction = await publicClient.waitForTransactionReceipt({
      hash: tx,
    })
    console.log('Transaction completed')
    console.log(transaction)
  }
}
