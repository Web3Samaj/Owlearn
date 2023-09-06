const ipfsGateway = 'https://nftstorage.link/ipfs/'

export const getJSONFromIPFS = async <T>(cid: string) => {
  const url = `${ipfsGateway}${cid}`
  const res = await fetch(url)
  const json = await res.json()
  return json as T
}
