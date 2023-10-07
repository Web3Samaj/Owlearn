import { withIronSessionApiRoute } from 'iron-session/next'
import { NextApiRequest, NextApiResponse } from 'next'
import { ironOptions } from '@/src/lib/authConfig'
import { WebhookContext } from '@/modules/publish/utils'

type WebhookRequestBody = {
  accessKey: string
  context: WebhookContext
  timestamp: number
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  switch (method) {
    case 'POST':
      const address = req.session.siwe?.data.address
      if (!address) return res.status(422).json({ message: 'No address.' })
      const {
        accessKey,
        context: { courseId },
      } = req.body as WebhookRequestBody
      // Check whether user with address `address` has access to ( has bought ) course with id `courseId`
      res.status(200).end()
      // res.send({ address: req.session.siwe?.data.address })
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default withIronSessionApiRoute(handler, ironOptions)
