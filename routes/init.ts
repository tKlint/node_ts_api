import express from 'express'
import path from 'path'
import errMiddleware from './errMiddleware'
import 'express-async-errors'
const app = express()

const port = 80
const staticPath = path.resolve(__dirname, '../public')
/**
 * 静态资源
 */
app.use(express.static(staticPath))


/**
 * 错误捕获
 */
app.use(errMiddleware)

app.listen(port, () => {
    console.log(`server start at ${port}`)
})
