import * as LitJsSdk from '@lit-protocol/lit-node-client'

const chain = 'mumbai'
const client = new LitJsSdk.LitNodeClient(chain)
const infuraId = process.env.NEXT_PUBLIC_INFURA_ID
const infuraSecret = process.env.NEXT_PUBLIC_API_SECRET_KEY

class Lit {
  litNodeClient: any

  async connect() {
    await client.connect()
    this.litNodeClient = client
  }

  async encryptString(ipfsCID: string, certificateAddress: `0x${string}`) {
    if (!this.litNodeClient) {
      await this.connect()
    }

    const accessControlConditionsNFT = [
      {
        contractAddress: `${certificateAddress}`,
        standardContractType: 'ERC721',
        chain,
        method: 'balanceOf',
        parameters: [':userAddress'],
        returnValueTest: {
          comparator: '>',
          value: '0',
        },
      },
    ]

    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain })
    const { encryptedString, symmetricKey } = await LitJsSdk.encryptString(
      ipfsCID
    )

    const encryptedSymmetricKey = await this.litNodeClient.saveEncryptionKey({
      accessControlConditionsNFT,
      symmetricKey,
      authSig,
      chain,
    })

    return {
      encryptedString,
      encryptedSymmetricKey: LitJsSdk.uint8arrayToString(
        encryptedSymmetricKey,
        'base16'
      ),
    }
  }

  async decryptString(
    encryptedString: Blob,
    encryptedSymmetricKey: string,
    certificateAddress: `0x${string}`
  ) {
    if (!this.litNodeClient) {
      await this.connect()
    }

    const accessControlConditionsNFT = [
      {
        contractAddress: `${certificateAddress}`,
        standardContractType: 'ERC721',
        chain,
        method: 'balanceOf',
        parameters: [':userAddress'],
        returnValueTest: {
          comparator: '>',
          value: '0',
        },
      },
    ]

    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain })
    const symmetricKey = await this.litNodeClient.getEncryptionKey({
      accessControlConditionsNFT,
      toDecrypt: encryptedSymmetricKey,
      chain,
      authSig,
    })

    const decryptedString = await LitJsSdk.decryptString(
      encryptedString,
      symmetricKey
    )

    return { decryptedString }
  }

  async encryptToIPFS(certificateAddress: `0x${string}`, ipfsCID: string) {
    if (!this.litNodeClient) {
      await this.connect()
    }

    if (!infuraId) {
      console.log('INFURA ID MISSING')
      return
    }

    if (!infuraSecret) {
      console.log('INFURA API SECRET MISSING')
      return
    }

    const accessControlConditionsNFT = [
      {
        contractAddress: `${certificateAddress}`,
        standardContractType: 'ERC721',
        chain,
        method: 'balanceOf',
        parameters: [':userAddress'],
        returnValueTest: {
          comparator: '>',
          value: '0',
        },
      },
    ]

    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain })

    const ipfsCid = await LitJsSdk.encryptToIpfs({
      authSig,
      accessControlConditions: accessControlConditionsNFT,
      chain,
      string: ipfsCID,
      //   file, // If you want to encrypt a file instead of a string
      litNodeClient: this.litNodeClient,
      infuraId: infuraId,
      infuraSecretKey: infuraSecret,
    })
  }

  async decryptToIPFS(ipfsCid: string) {
    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain })

    const decryptedString = await LitJsSdk.decryptFromIpfs({
      authSig,
      ipfsCid, // This is returned from the above encryption
      litNodeClient: this.litNodeClient,
    })

    return { decryptedString }
  }
}
