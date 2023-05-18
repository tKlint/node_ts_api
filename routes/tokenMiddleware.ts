import { RequestHandler } from "express";
import { pathToRegexp } from 'path-to-regexp'
import { getErr } from "./getSendResult";
import { verify } from './jwt';
import { RequestWithId } from "./type";

const nonTokenApis = [
  {
    method: 'POST',
    path: '/api/admin/login'
  },
  {
    method: 'POST',
    path: '/api/upload'
  },
  {
    method: 'GET',
    path: '/api/download/:filename'
  }
]
const handleNonToken: RequestHandler = (req, res, next) => {
  res
    .status(403)
    .send(getErr("you dont have any token to access the api", 403));
}

const tokenMiddleware: RequestHandler = (req: RequestWithId, resp, next) => {
  const apis = nonTokenApis.filter((api) => {
    const pattern = pathToRegexp(api.path)
    return api.method === req.method && pattern.test(req.path)
  })
  if (apis.length > 0) {
    next()
    return
  }
  const result = verify(req)
  if (result) {
    req.id = result.id
    next()
  } else {
    handleNonToken(req, resp, next)
  }
}
export default tokenMiddleware;
