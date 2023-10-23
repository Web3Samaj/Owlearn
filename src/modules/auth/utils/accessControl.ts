import { EDUCATOR_BADGE_ADDRESS } from '@/src/constants/educatorBadge'
import { Network, Alchemy } from 'alchemy-sdk'

const ALCHEMY_API_KEY: any = process.env.ALCHEMY_ID
const contractAddress = EDUCATOR_BADGE_ADDRESS

export const checkEducator = async (
  userAddress: string
): Promise<boolean | undefined> => {
  try {
    const settings = {
      apiKey: ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
      network: Network.MATIC_MUMBAI, // Replace with your network.
    }

    const alchemy = new Alchemy(settings)

    console.log('Checking for the NFT collection')
    const response = await alchemy.nft.verifyNftOwnership(
      userAddress,
      contractAddress
    )
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
  }
}
