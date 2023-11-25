import { useAccount, usePublicClient, useWalletClient } from 'wagmi'
import { getAccount, getPublicClient, getWalletClient } from 'wagmi/actions'
import { decodeFunctionResult, getContract } from 'viem'
import {
  FEE_MODULE_IMPL_ABI,
  FEE_MODULE_IMPL_ADDRESS,
  FEE_MODULE_PROXY_ADDRESS,
} from '@/src/constants/availableModule'

export const feeModule = async () => {
  const { address: account } = getAccount()
  const publicClient = getPublicClient()
  const walletClient = await getWalletClient()
  if (!walletClient) {
    return
  }
  const feeModuleContract = getContract({
    address: FEE_MODULE_IMPL_ADDRESS,
    abi: FEE_MODULE_IMPL_ABI,
  })

  // Get the whitelist status of the module implementation
  const getFeeData = async (
    courseAddress: `0x${string}`
  ): Promise<
    | {
        currency: `0x${string}`
        amount: bigint
        recepient: `0x${string}`
        creatorId: bigint
        courseId: bigint
      }
    | undefined
  > => {
    try {
      const { address: account } = getAccount()
      const publicClient = getPublicClient()
      const result = await publicClient.readContract({
        account,
        address: FEE_MODULE_PROXY_ADDRESS,
        abi: FEE_MODULE_IMPL_ABI,
        functionName: 'getFeeData',
        args: [courseAddress],
      })
      return result
    } catch (error) {
      console.log(error)
    }
  }
}
