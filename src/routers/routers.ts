import userRouter from './user-router';

const loadRouters = (app: any) => {
  app.use(userRouter);

  return app;
};

export default loadRouters;
