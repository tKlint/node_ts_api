# 掉渣选手卷一下后端

> 一个简单的node服务, 包含了前端常见接口场景

## 服务场景

- JWT
- CORS
- 文件上传/下载
- ORM(mysql模型)
- 日志记录
- 静态资源
- 前端history路由支持
- Api路由
- 断点调试
- 文件监听(nodemon)
- 访问Token验证
- 错误捕获
- 二维码生成`开发中`
- 图片水印`开发中`
- 登录验证码`开发中`
- 即时通讯`开发中`

## 技术选型

> 最初很纠结是使用CMJ还是ESM, 两者各有利弊吧. 由于本人是前端出身, 更偏向ESM. 而且`node`对`ESM`越来越完善, 最终确定为`ESM`

特别感谢`ts-node`让我可以开开心心的用`typescirpt`开发, 不让可能要请出`webpack`了🐶

- `Typescirpt` JavaScript超集
- `CORS` 跨域访问资源策略
- `Nodemon` 监听文件改动, 自动重启服务
- `Md5` 加密用户信息
- `Log4js` 生成文件日志
- `Jsonwebtoken` 生成/验证**Jwt**
- `Mysql2` 链接`MySql`数据库管道
- `Sequelize` *对象关系映射* ORM
- `Express` 启动`Node`服务
- `Connect-history-api-fallback` 访问资源404时移交到静态资源(前端history路由)
- `Express-async-error` 捕获异步错误移交到对应的中间价

`Yarn v1.22.19` `Node v18.16.0`
