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
import cors from 'cors'
import errMiddleware from './errMiddleware'
import history from 'connect-history-api-fallback'
import 'express-async-errors'
import admin from './apis/admin'
import upload from './apis/upload'

import tokenMiddleware from './tokenMiddleware'
import download from './apis/download'
const app = express()

const port = 80
const staticPath = path.resolve(__dirname, '../public')

/**
 * 静态资源
 */
app.use(express.static(staticPath))

/**
 * 跨域访问白名单
 */
const originWhitelist = ['http://127.0.0.1:80', 'http://127.0.0.1:5500']

/**
 * 允许访问源
 */
app.use(cors({
  credentials: true,
  origin(requestOrigin, callback) {
    if (!requestOrigin) {
      callback(null, '*')
      return
    }
    console.log(requestOrigin, 'requestOrigin');
    if(originWhitelist.includes(requestOrigin)) {
      callback(null, requestOrigin)
      return
    }
    callback(new Error(`CORS ERROR! origin: ${requestOrigin} not allowed!`))
  },
}))

/**
 * 令牌校验中间件
 */
app.use(tokenMiddleware)

/**
 * 请求体解析
 * @description x-www-form-urlencoded
 * @description application/json
 */
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/admin', admin)
app.use('/api/upload', upload)
app.use('/api/download', download)

/**
 * 接口降级处理
 * @description 支持前端history路由
 */
app.use(history());

/**
 * 错误捕获
 */
app.use(errMiddleware)

app.listen(port, () => {
  console.log(`server start at ${port}`)
})
