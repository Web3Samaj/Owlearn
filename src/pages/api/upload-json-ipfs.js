// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NFTStorage } from 'nft.storage'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const client = new NFTStorage({
      token: process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN,
    })
    const jsonData = req.body
    const blob = new Blob([JSON.stringify(jsonData)], {
      type: 'application/json',
    })
    const cid = await client.storeBlob(blob)
    res.status(201).json({ cid })
  }
}
