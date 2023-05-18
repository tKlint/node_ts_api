import { Router } from 'express'
import path from 'path'
const router = Router()

router.get('/:filename', (req, resp) => {
  const downloadPath = path.resolve(__dirname, '../../download', req.params.filename)
  resp.download(downloadPath, req.params.filename)
})


export default router