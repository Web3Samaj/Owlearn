import { useAccount, usePublicClient, useWalletClient } from 'wagmi'
import { getAccount, getPublicClient, getWalletClient } from 'wagmi/actions'
import { OWLEARN_ID_ABI, OWLEARN_ID_ADDRESS } from '../../constants/owlearnId'
import { decodeFunctionResult, formatEther, getContract } from 'viem'
import {
  prepareAllowListMerkleProof,
  prepareBlackListMerkleProof,
} from '../utils/merkleProof'
import { polygonMumbai } from 'wagmi/chains'

const getPrice = async (
  userName: string,
  toAddress: `0x${string}`
): Promise<
  | {
      price: string
      isFeeEnabled: boolean
    }
  | undefined
> => {
  const { address: account } = getAccount()
  const publicClient = getPublicClient()
  try {
    const isFeeEnabled = await publicClient.readContract({
      account,
      address: OWLEARN_ID_ADDRESS,
      abi: OWLEARN_ID_ABI,
      functionName: 'isFeeEnabled',
    })
    if (isFeeEnabled) {
      const result = await publicClient.readContract({
        account,
        address: OWLEARN_ID_ADDRESS,
        abi: OWLEARN_ID_ABI,
        functionName: 'getPrice',
        args: [userName, toAddress],
      })
      const price = formatEther(result)
      return { price, isFeeEnabled }
    } else {
      const price = '0'
      return { price, isFeeEnabled }
    }
  } catch (error) {
    console.log(error)
  }
}

const checkAddressEligibility = async (
  address: `0x${string}`
): Promise<
  | {
      isEligible: boolean
      isAllowListEnabled: boolean
      allowListProof?: string[]
    }
  | undefined
> => {
  const { address: account } = getAccount()
  const publicClient = getPublicClient()
  try {
    const isAllowListEnabled = await publicClient.readContract({
      account,
      address: OWLEARN_ID_ADDRESS,
      abi: OWLEARN_ID_ABI,
      functionName: 'isAllowListEnabled',
    })
    if (isAllowListEnabled) {
      const allowListProof = await prepareAllowListMerkleProof(address)
      const result = await publicClient.readContract({
        account,
        address: OWLEARN_ID_ADDRESS,
        abi: OWLEARN_ID_ABI,
        functionName: 'checkAllowlist',
        args: [allowListProof, address],
      })
      return { isEligible: result, isAllowListEnabled, allowListProof }
    } else {
      return { isEligible: true, isAllowListEnabled }
    }
  } catch (error) {
    console.log(error)
  }
}

const checkUsernameEligibility = async (
  username: string
): Promise<
  | {
      isEligible: boolean
      isBlackListEnabled: boolean
      blackListProof?: string[]
    }
  | undefined
> => {
  const { address: account } = getAccount()
  const publicClient = getPublicClient()
  try {
    const isBlackListEnabled = await publicClient.readContract({
      account,
      address: OWLEARN_ID_ADDRESS,
      abi: OWLEARN_ID_ABI,
      functionName: 'isBlackListEnabled',
    })
    if (isBlackListEnabled) {
      const blackListProof = await prepareBlackListMerkleProof(username)

      const blackListResult = await publicClient.readContract({
        account,
        address: OWLEARN_ID_ADDRESS,
        abi: OWLEARN_ID_ABI,
        functionName: 'checkBlackListName',
        args: [blackListProof, username],
      })
      // console.log(blackListResult)

      const availableHandleResult = await publicClient.readContract({
        account,
        address: OWLEARN_ID_ADDRESS,
        abi: OWLEARN_ID_ABI,
        functionName: 'checkHandle',
        args: [username],
      })
      // console.log(availableHandleResult)

      return {
        isEligible: !blackListResult && availableHandleResult,
        isBlackListEnabled,
        blackListProof,
      }
    } else {
      const availableHandleResult = await publicClient.readContract({
        account,
        address: OWLEARN_ID_ADDRESS,
        abi: OWLEARN_ID_ABI,
        functionName: 'checkHandle',
        args: [username],
      })
      return { isEligible: availableHandleResult, isBlackListEnabled }
    }
  } catch (error) {
    console.log(error)
  }
}

const registerOwlearnId = async (
  userName: string,
  isAllowListEnabled: boolean,
  isBlackListEnabled: boolean,
  allowListProof?: string[],
  blackListProof?: string[]
): Promise<{ owlIdTokenId: bigint } | undefined> => {
  try {
    const { address: account } = getAccount()
    const publicClient = getPublicClient()
    const walletClient = await getWalletClient()
    if (!walletClient) return
    if (!account) return

    const data = await publicClient.simulateContract({
      account,
      chain: polygonMumbai,
      address: OWLEARN_ID_ADDRESS,
      abi: OWLEARN_ID_ABI,
      functionName: 'registerOwlId',
      args: [
        userName,
        isAllowListEnabled ? allowListProof : [],
        isBlackListEnabled ? blackListProof : [],
      ],
    })
    console.log(data)
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
    return { owlIdTokenId: data?.result }
  } catch (error) {
    console.log(error)
  }
}

export {
  checkAddressEligibility,
  checkUsernameEligibility,
  getPrice,
  registerOwlearnId,
}

const getPrice = async (
  userName: string,
  toAddress: `0x${string}`
): Promise<
  | {
      price: string
      isFeeEnabled: boolean
    }
  | undefined
> => {
  const { address: account } = getAccount()
  const publicClient = getPublicClient()
  try {
    const isFeeEnabled = await publicClient.readContract({
      account,
      address: OWLEARN_ID_ADDRESS,
      abi: OWLEARN_ID_ABI,
      functionName: 'isFeeEnabled',
    })
    if (isFeeEnabled) {
      const result = await publicClient.readContract({
        account,
        address: OWLEARN_ID_ADDRESS,
        abi: OWLEARN_ID_ABI,
        functionName: 'getPrice',
        args: [userName, toAddress],
      })
      const price = formatEther(result)
      return { price, isFeeEnabled }
    } else {
      const price = '0'
      return { price, isFeeEnabled }
    }
  } catch (error) {
    console.log(error)
  }
}

const checkAddressEligibility = async (
  address: `0x${string}`
): Promise<
  | {
      isEligible: boolean
      isAllowListEnabled: boolean
      allowListProof?: string[]
    }
  | undefined
> => {
  const { address: account } = getAccount()
  const publicClient = getPublicClient()
  try {
    const isAllowListEnabled = await publicClient.readContract({
      account,
      address: OWLEARN_ID_ADDRESS,
      abi: OWLEARN_ID_ABI,
      functionName: 'isAllowListEnabled',
    })
    if (isAllowListEnabled) {
      const allowListProof = await prepareAllowListMerkleProof(address)
      const result = await publicClient.readContract({
        account,
        address: OWLEARN_ID_ADDRESS,
        abi: OWLEARN_ID_ABI,
        functionName: 'checkAllowlist',
        args: [allowListProof, address],
      })
      return { isEligible: result, isAllowListEnabled, allowListProof }
    } else {
      return { isEligible: true, isAllowListEnabled }
    }
  } catch (error) {
    console.log(error)
  }
}

const checkUsernameEligibility = async (
  username: string
): Promise<
  | {
      isEligible: boolean
      isBlackListEnabled: boolean
      blackListProof?: string[]
    }
  | undefined
> => {
  const { address: account } = getAccount()
  const publicClient = getPublicClient()
  try {
    const isBlackListEnabled = await publicClient.readContract({
      account,
      address: OWLEARN_ID_ADDRESS,
      abi: OWLEARN_ID_ABI,
      functionName: 'isBlackListEnabled',
    })
    if (isBlackListEnabled) {
      const blackListProof = await prepareBlackListMerkleProof(username)

      const blackListResult = await publicClient.readContract({
        account,
        address: OWLEARN_ID_ADDRESS,
        abi: OWLEARN_ID_ABI,
        functionName: 'checkBlackListName',
        args: [blackListProof, username],
      })

      const availableHandleResult = await publicClient.readContract({
        account,
        address: OWLEARN_ID_ADDRESS,
        abi: OWLEARN_ID_ABI,
        functionName: 'checkHandle',
        args: [username],
      })

      return {
        isEligible: !blackListResult && availableHandleResult,
        isBlackListEnabled,
        blackListProof,
      }
    } else {
      const availableHandleResult = await publicClient.readContract({
        account,
        address: OWLEARN_ID_ADDRESS,
        abi: OWLEARN_ID_ABI,
        functionName: 'checkHandle',
        args: [username],
      })
      return { isEligible: availableHandleResult, isBlackListEnabled }
    }
  } catch (error) {
    console.log(error)
  }
}

const registerOwlearnId = async (
  userName: string,
  isAllowListEnabled: boolean,
  isBlackListEnabled: boolean,
  allowListProof?: string[],
  blackListProof?: string[]
): Promise<{ owlIdTokenId: bigint } | undefined> => {
  try {
    const { address: account } = getAccount()
    const publicClient = getPublicClient()
    const walletClient = await getWalletClient()
    if (!walletClient) return
    if (!account) return
    console.log(walletClient)
    console.log(publicClient)

    const data = await publicClient.simulateContract({
      account,
      address: OWLEARN_ID_ADDRESS,
      abi: OWLEARN_ID_ABI,
      functionName: 'registerOwlId',
      args: [
        userName,
        isAllowListEnabled ? allowListProof : [],
        isBlackListEnabled ? blackListProof : [],
      ],
    })
    console.log(data)
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
    return { owlIdTokenId: data?.result }
  } catch (error) {
    console.log(error)
  }
}

export {
  checkAddressEligibility,
  checkUsernameEligibility,
  getPrice,
  registerOwlearnId,
}

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

  const getPrice = async (
    userName: string,
    toAddress: `0x${string}`
  ): Promise<
    | {
        price: string
      }
    | undefined
  > => {
    try {
      const result = await publicClient.readContract({
        account,
        address: OWLEARN_ID_ADDRESS,
        abi: OWLEARN_ID_ABI,
        functionName: 'getPrice',
        args: [userName, toAddress],
      })
      const price = formatEther(result)
      return { price }
    } catch (error) {
      console.log(error)
    }
  }

  const checkAddressEligibility = async (
    address: `0x${string}`
  ): Promise<
    | {
        isEligible: boolean
      }
    | undefined
  > => {
    try {
      const allowListProof = await prepareAllowListMerkleProof(address)

      const result = await publicClient.readContract({
        account,
        address: OWLEARN_ID_ADDRESS,
        abi: OWLEARN_ID_ABI,
        functionName: 'checkAllowlist',
        args: [allowListProof, address],
      })
      return { isEligible: result }
    } catch (error) {
      console.log(error)
    }
  }

  const checkUsernameEligibility = async (
    username: string
  ): Promise<
    | {
        isEligible: boolean
      }
    | undefined
  > => {
    try {
      const blackListProof = await prepareBlackListMerkleProof(username)

      const blackListResult = await publicClient.readContract({
        account,
        address: OWLEARN_ID_ADDRESS,
        abi: OWLEARN_ID_ABI,
        functionName: 'checkBlackListName',
        args: [blackListProof, username],
      })

      const availableHandleResult = await publicClient.readContract({
        account,
        address: OWLEARN_ID_ADDRESS,
        abi: OWLEARN_ID_ABI,
        functionName: 'checkHandle',
        args: [username],
      })
      return { isEligible: blackListResult && availableHandleResult }
    } catch (error) {
      console.log(error)
    }
  }

  const registerOwlearnId = async (userName: string) => {
    try {
      if (!account) return
      const allowListProof = await prepareAllowListMerkleProof(account)
      const blackListProof = await prepareBlackListMerkleProof(userName)

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

  const getNameRecord = async (
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
