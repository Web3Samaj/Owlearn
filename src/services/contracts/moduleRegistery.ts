import { useAccount, usePublicClient, useWalletClient } from 'wagmi'
import { getAccount, getPublicClient, getWalletClient } from 'wagmi/actions'
import { decodeFunctionResult, getContract } from 'viem'
import {
  MODULE_REGISTERY_ABI,
  MODULE_REGISTERY_ADDRESS,
} from '@/src/constants/OwlearnModuleRegistery'

export const moduleRegistery = async () => {
  const { address: account } = getAccount()
  const publicClient = getPublicClient()
  const walletClient = await getWalletClient()
  if (!walletClient) {
    return
  }
  const moduleRegisterContract = getContract({
    address: MODULE_REGISTERY_ADDRESS,
    abi: MODULE_REGISTERY_ABI,
  })

  // Function for the user to select the module Implementation and Create a proxy contract for them
  // Returns the contract Address of module proxy which has to be then set and initialised in the course contract
  const createModuleProxy = async (
    moduleimplementationAddress: `0x${string}`
  ): Promise<[`0x${string}`] | undefined> => {
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
        address: MODULE_REGISTERY_ADDRESS,
        abi: MODULE_REGISTERY_ABI,
        functionName: 'createModuleProxy',
        args: [moduleimplementationAddress],
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

  // Get the whitelist status of the module implementation
  const getWhitelistedModuleImplementation = async (
    moduleimplementationAddress: `0x${string}`
  ): Promise<boolean | undefined> => {
    try {
      const { address: account } = getAccount()
      const publicClient = getPublicClient()
      const result = await publicClient.readContract({
        account,
        address: MODULE_REGISTERY_ADDRESS,
        abi: MODULE_REGISTERY_ABI,
        functionName: 'getWhitelistedModuleImplementation',
        args: [moduleimplementationAddress],
      })
      return result
    } catch (error) {
      console.log(error)
    }
  }
}
