/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-16 21:32:39
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-05-16 23:27:54
 * @FilePath: \node_ts_api\routes\init.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import express from 'express'
import path from 'path'
import errMiddleware from './errMiddleware'

import 'express-async-errors'
import admin from './apis/admin'
import tokenMiddleware from './tokenMiddleware'
const app = express()

const port = 80
const staticPath = path.resolve(__dirname, '../public')
/**
 * 静态资源
 */
app.use(express.static(staticPath))

app.use(tokenMiddleware)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/admin', admin)


/**
 * 错误捕获
 */
app.use(errMiddleware)

app.listen(port, () => {
    console.log(`server start at ${port}`)
})
