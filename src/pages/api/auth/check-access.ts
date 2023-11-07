import { withIronSessionApiRoute } from 'iron-session/next'
import { unsealData } from 'iron-session'
import { NextApiRequest, NextApiResponse } from 'next'
import { ironOptions } from '@/src/lib/authConfig'
import { WebhookContext } from '@/modules/publish/utils'
import jwt from 'jsonwebtoken'
import { checkCourseAccessStatus } from '@/src/modules/auth/utils/accessControl'

type WebhookRequestBody = {
  accessKey: string
  context: WebhookContext
  timestamp: number
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  switch (method) {
    case 'POST':
      const {
        accessKey,
        context: { courseId },
      } = req.body as WebhookRequestBody
      const decodedToken = jwt.verify(
        accessKey,
        process.env.JWT_PRIVATE_KEY as string
      ) as { address: string }
      const address = decodedToken.address
      // Check whether user with address `address` has access to ( has bought ) course with id `courseId`
      const hasAccess = await checkCourseAccessStatus(address, courseId)
      if (hasAccess) {
        res.status(200).end()
      } else {
        res.status(403).end()
      }
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
