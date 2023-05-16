import { Response, Request } from 'express'
import jsonwebtoken from 'jsonwebtoken'
// response
const secrect = 'tklint.secrect.scc'
const cookieKey = 'token'


export function publish(res: Response, maxAge = 3600 * 24, info = {}) {
  const token = jsonwebtoken.sign(info, secrect, {
    expiresIn: maxAge
  })
  res.cookie(cookieKey, token, {
    maxAge,
    path: '/'
  })
  res.header('authorization', token)
}

export function verify(req: Request) {
  let token: string = req.cookies[cookieKey] || req.headers['authorization'];
  if (!token) {
    return null;
  }
  token = token.split(' ').at(-1)!;
  try {
    return jsonwebtoken.verify(token, secrect)
  } catch (error) {
    return null
  }
}