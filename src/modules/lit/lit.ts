import * as LitJsSdk from '@lit-protocol/lit-node-client'

const chain = 'mumbai'
const client = new LitJsSdk.LitNodeClient(chain)

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
    encryptedString: string,
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
}
