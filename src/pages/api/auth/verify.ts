import { withIronSessionApiRoute } from 'iron-session/next'
import { NextApiRequest, NextApiResponse } from 'next'
import { SiweMessage } from 'siwe'
import { ironOptions } from '@/src/lib/authConfig'
import jwt from 'jsonwebtoken'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  switch (method) {
    case 'POST':
      try {
        const { message, signature } = req.body
        const siweMessage = new SiweMessage(message)
        const fields = await siweMessage.verify({ signature })

        if (fields.data.nonce !== req.session.nonce)
          return res.status(422).json({ message: 'Invalid nonce.' })

        const expiresIn = 60 * 60 * 24 * 7 // 1 week
        console.log({
          address: fields.data.address,
        })
        const token = jwt.sign(
          { address: fields.data.address },
          process.env.JWT_PRIVATE_KEY as string,
          { expiresIn }
        )

        await req.session.destroy()
        res.json({ ok: true, token })
      } catch (_error) {
        res.json({ ok: false })
      }
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default withIronSessionApiRoute(handler, ironOptions)
