import { withIronSessionApiRoute } from 'iron-session/next'
import { NextApiRequest, NextApiResponse } from 'next'
import { ironOptions } from '@/src/lib/authConfig'
import jwt from 'jsonwebtoken'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  switch (method) {
    case 'GET':
      const jwtToken = req.headers.authorization?.split(' ')[1]
      console.log('jwtToken', jwtToken)
      if (!jwtToken) return res.status(401).end()
      const decodedToken = jwt.verify(
        jwtToken,
        process.env.JWT_PRIVATE_KEY as string
      ) as { address: string }
      console.log('decodedToken', decodedToken)
      res.send({ address: decodedToken.address })
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
