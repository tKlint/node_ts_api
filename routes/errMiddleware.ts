import { ErrorRequestHandler } from 'express'
import { getErr } from './getSendResult';
import { defaultLogger } from '../logger';

const errMiddleware: ErrorRequestHandler<any> = (err, req, res, next) => {
  if (err) {
    const message = err instanceof Error ? err.message : err;
    defaultLogger.error(err)
    res.status(500).send(getErr(message))
    return
  }
  next()
}
export default errMiddleware;