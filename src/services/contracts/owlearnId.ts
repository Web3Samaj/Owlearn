import { useAccount, usePublicClient, useWalletClient } from 'wagmi'
import { getAccount, getPublicClient, getWalletClient } from 'wagmi/actions'
import { OWLEARN_ID_ABI, OWLEARN_ID_ADDRESS } from '../../constants/owlearnId'
import { decodeFunctionResult, getContract } from 'viem'

export const owlearnId = async () => {
  const { address: account } = getAccount()
  const publicClient = getPublicClient()
  const walletClient = await getWalletClient()
  if (!walletClient) {
    return
  }

  const owlearnId = getContract({
    address: OWLEARN_ID_ADDRESS,
    abi: OWLEARN_ID_ABI,
  })

  const registerOwlearnId = async (userName: string) => {
    try {
      const allowListProof: `0x${string}`[] = []
      const blackListProof: `0x${string}`[] = []

      const data = await publicClient.simulateContract({
        account,
        address: OWLEARN_ID_ADDRESS,
        abi: OWLEARN_ID_ABI,
        functionName: 'registerOwlId',
        args: [userName, allowListProof, blackListProof],
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
    } catch (error) {
      console.log(error)
    }
  }

  const getUserName = async (
    userAddress: `0x${string}`
  ): Promise<string | undefined> => {
    try {
      const result = await publicClient.readContract({
        account,
        address: OWLEARN_ID_ADDRESS,
        abi: OWLEARN_ID_ABI,
        functionName: 'getNameRecordFromAddress',
        args: [userAddress],
      })
      return result
    } catch (error) {
      console.log(error)
    }
  }

  const geNameRecord = async (
    userName: string
  ): Promise<
    | {
        domain: string
        user: `0x${string}`
        tokenId: bigint
      }
    | undefined
  > => {
    try {
      const result = await publicClient.readContract({
        account,
        address: OWLEARN_ID_ADDRESS,
        abi: OWLEARN_ID_ABI,
        functionName: 'getNameRecord',
        args: [userName],
      })
      return result
    } catch (error) {
      console.log(error)
    }
  }
}
