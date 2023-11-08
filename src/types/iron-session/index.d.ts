import 'iron-session'
import { SiweResponse } from 'siwe'

declare module 'iron-session' {
  interface IronSessionData {
    nonce?: string
    siwe?: SiweResponse
  }
}
