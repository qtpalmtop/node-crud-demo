// 第三方模块
import bodyParser from 'body-parser';
import express from 'express';
import { NextFunction, Request, Response } from 'express'; // express 申明文件定义的类型

// 自定义配置
import systemConfig from './config';

import loadRouters from './routers/routers';
import connectDatabase from './utils/database';

let app = express();

app = loadRouters(app);

// 连接数据库
connectDatabase.then(res => {
  console.log('in database: isOpenDatabase', res);
});

// 处理 post 请求的请求体，限制大小最多为 20 兆
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
app.use(bodyParser.json({ limit: '20mb' }));

// error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.sendStatus(500);
});

app.listen(systemConfig.port, () => {
  console.log(`the server is start at port ${systemConfig.port}`);
});

export default app;
