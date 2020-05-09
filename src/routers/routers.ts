import userRouter from './user.router';
import attachmentRouter from './attachment.router';
import jsonRouter from './json.router';

/**
 * 路由加载工厂函数
 * @param app any
 * @returns app
 */
const loadRouters = (app: any) => {

  // 加载 用户 路由
  app.use(userRouter);

  // 加载 附件 路由
  app.use(attachmentRouter);

  // 加载 json 路由
  app.use(jsonRouter);

  return app;
};

export default loadRouters;
