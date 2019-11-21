import userRouter from './user-router';

const loadRouters = (app: any) => {

  // 加载 用户 路由
  app.use(userRouter);

  return app;
};

export default loadRouters;
