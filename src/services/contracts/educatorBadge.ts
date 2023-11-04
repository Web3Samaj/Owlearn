import { useAccount, usePublicClient, useWalletClient } from 'wagmi'
import { getAccount, getPublicClient, getWalletClient } from 'wagmi/actions'
import {
  EDUCATOR_BADGE_ABI,
  EDUCATOR_BADGE_ADDRESS,
} from '../../constants/educatorBadge'
import { decodeFunctionResult, getContract } from 'viem'

const getEducatorId = async (): Promise<bigint | undefined> => {
  return BigInt(1)
  try {
    const { address: account } = getAccount()
    const publicClient = getPublicClient()
    if (!account || !publicClient) {
      return
    }
    const result = await publicClient.readContract({
      account,
      address: EDUCATOR_BADGE_ADDRESS,
      abi: EDUCATOR_BADGE_ABI,
      functionName: 'creatorIdByAddress',
      args: [account],
    })
    return result
  } catch (error) {
    console.log(error)
  }
}

export { getEducatorId }

export const educatorBadge = async () => {
  const { address: account } = getAccount()
  const publicClient = getPublicClient()
  const walletClient = await getWalletClient()
  if (!walletClient) {
    return
  }

  const educatorBadge = getContract({
    address: EDUCATOR_BADGE_ADDRESS,
    abi: EDUCATOR_BADGE_ABI,
  })

  // badgeLevel initial 1
  const mintEducatorBadge = async (
    educatorAddress: `0x${string}`,
    badgeLevel: bigint
  ) => {
    try {
      const data = await publicClient.simulateContract({
        account,
        address: EDUCATOR_BADGE_ADDRESS,
        abi: EDUCATOR_BADGE_ABI,
        functionName: 'mintEducatorBadges',
        args: [educatorAddress, badgeLevel],
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
    } catch (error) {
      console.log(error)
    }
  }

  // Owl Id is the ID user registers with
  const registerAsEducator = async (owlId: bigint) => {
    try {
      const data = await publicClient.simulateContract({
        account,
        address: EDUCATOR_BADGE_ADDRESS,
        abi: EDUCATOR_BADGE_ABI,
        functionName: 'registerAsEducator',
        args: [owlId],
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
    } catch (error) {
      console.log(error)
    }
  }
}
