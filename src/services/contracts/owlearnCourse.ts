import { useAccount, usePublicClient, useWalletClient } from 'wagmi'
import { getAccount, getPublicClient, getWalletClient } from 'wagmi/actions'
import { OWLEARN_COURSE_ABI } from '../../constants/owlearnCourse'
import { decodeFunctionResult, getContract } from 'viem'

const owlearnCouse = async (OWLEARN_COURSE_ADDRESS: `0x${string}`) => {
  const { address: account } = getAccount()
  const publicClient = getPublicClient()
  const walletClient = await getWalletClient()
  if (!walletClient) {
    return
  }

  const owlearnCourse = getContract({
    address: OWLEARN_COURSE_ADDRESS,
    abi: OWLEARN_COURSE_ABI,
  })

  const setAndInitialiseMintModule = async (
    mintModuleAddress: `0x${string}`,
    setData: `0x${string}`
  ) => {
    try {
      const data = await publicClient.simulateContract({
        account,
        address: OWLEARN_COURSE_ADDRESS,
        abi: OWLEARN_COURSE_ABI,
        functionName: 'setAndInitialiseMintModule',
        args: [mintModuleAddress, setData],
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

  const disableModule = async () => {
    try {
      const data = await publicClient.simulateContract({
        account,
        address: OWLEARN_COURSE_ADDRESS,
        abi: OWLEARN_COURSE_ABI,
        functionName: 'disableModule',
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

  const mintNewCourseNFTs = async (courseNFTURIs: string[]) => {
    try {
      const data = await publicClient.simulateContract({
        account,
        address: OWLEARN_COURSE_ADDRESS,
        abi: OWLEARN_COURSE_ABI,
        functionName: 'mintCourseNFTs',
        args: [courseNFTURIs],
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

  const editCourseNFT = async (tokenId: bigint, courseNFTURI: string) => {
    try {
      const data = await publicClient.simulateContract({
        account,
        address: OWLEARN_COURSE_ADDRESS,
        abi: OWLEARN_COURSE_ABI,
        functionName: 'editCourseNFT',
        args: [tokenId, courseNFTURI],
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

  const deleteCourseNFT = async (tokenId: bigint) => {
    try {
      const data = await publicClient.simulateContract({
        account,
        address: OWLEARN_COURSE_ADDRESS,
        abi: OWLEARN_COURSE_ABI,
        functionName: 'deleteCourseNFT',
        args: [tokenId],
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

  const mintCourseCertificate = async (
    studentAddress: `0x${string}`,
    mintData: `0x${string}`
  ) => {
    try {
      const data = await publicClient.simulateContract({
        account,
        address: OWLEARN_COURSE_ADDRESS,
        abi: OWLEARN_COURSE_ABI,
        functionName: 'mintCourseCertificate',
        args: [studentAddress, mintData],
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
}
