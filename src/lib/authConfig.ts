export const ironOptions = {
  cookieName: 'owlearn_auth_cookie',
  password: process.env.IRON_SESSION_PASSWORD as string,
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}
