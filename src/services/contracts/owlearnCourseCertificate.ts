import { useAccount, usePublicClient, useWalletClient } from 'wagmi'
import { getAccount, getPublicClient, getWalletClient } from 'wagmi/actions'
import { COURSE_CERTIFICATE_ABI } from '../../constants/owlearnCourseCertificate'
import { decodeFunctionResult, getContract } from 'viem'

export const courseCertificate = async (
  COURSE_CERTIFICATE_ADDRESS: `0x${string}`
) => {
  const { address: account } = getAccount()
  const publicClient = getPublicClient()
  const walletClient = await getWalletClient()
  if (!walletClient) {
    return
  }

  const courseResource = getContract({
    address: COURSE_CERTIFICATE_ADDRESS,
    abi: COURSE_CERTIFICATE_ABI,
  })

  const setCertificateBaseURI = async (newCertificateURI: string) => {
    try {
      const data = await publicClient.simulateContract({
        account,
        address: COURSE_CERTIFICATE_ADDRESS,
        abi: COURSE_CERTIFICATE_ABI,
        functionName: 'setBaseURI',
        args: [newCertificateURI],
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

  const burnCertificate = async (certificateId: bigint) => {
    try {
      const data = await publicClient.simulateContract({
        account,
        address: COURSE_CERTIFICATE_ADDRESS,
        abi: COURSE_CERTIFICATE_ABI,
        functionName: 'burn',
        args: [certificateId],
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

  const revokeCertificate = async (certificateId: bigint) => {
    try {
      const data = await publicClient.simulateContract({
        account,
        address: COURSE_CERTIFICATE_ADDRESS,
        abi: COURSE_CERTIFICATE_ABI,
        functionName: 'revoke',
        args: [certificateId],
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
