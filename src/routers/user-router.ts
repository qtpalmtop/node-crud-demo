import express from 'express';
import cookieParse from 'cookie-parser';
import util from 'util';

import UserController from '../controllers/user-controller';

const userRouter = express.Router();

userRouter.use(cookieParse());
userRouter.use(express.urlencoded({ extended: false }));

userRouter.post('/', (req, res) => {
  console.log('Cookies: ' + util.inspect(req.cookies));

  res.send({
    cookies: util.inspect(req.cookies),
    code: 200
  });
});

/**
 * 创建用户
 */
userRouter.post('/createUser.vm', UserController.createUser);

/**
 * 删除用户
 */
userRouter.post('/deleteUser.vm', UserController.deleteUser);

/**
 * 查询用户
 */
userRouter.post('/getUser.vm', UserController.getUser);

/**
 * 增加用户列表
 */
userRouter.post('/getUserList.vm', UserController.getUserList);

/**
 * 修改用户
 */
userRouter.post('/updateUser.vm', UserController.updateUser);

/*
userRouter.get('/get_user', UserController.getUser);

userRouter.post('/list_user', UserController.listUser);

userRouter.get('/ab*cd', (req, res) => {
  console.log('/ab*cd GET 请求');
  res.send('正则匹配');
});

/!**
 * 创建用户
 *!/
userRouter.get('/createUser.vm', (req, res) => {
  console.log('in createUser: req', req);

  UserController.create([
    {
      username: req.query.username || '',
      password: req.query.password || ''
    }
  ], (result: any) => {

    console.log('in userRouter createUser:', result);

    res.send({
      data: result.data,
      code: result.code
    });

  });

});

/!**
 * 删除用户
 *!/
userRouter.get('/deleteUser.vm', (req, res) => {

  UserController.delete(req.query, (result: any) => {

    console.log('in userRouter deleteUser:', result);

    res.send({
      data: result.data,
      code: result.code
    });

  });

});

/!**
 * 查询用户
 *!/
userRouter.get('/getUser.vm', (req, res) => {

  console.log('in userRouter queryUser query:', req.query);

  UserController.query(req.query, (result: any) => {

    console.log('in userRouter queryUser:', result.data);

    res.send({
      data: result.data,
      code: result.code
    });

  });

});

/!**
 * 增加用户列表
 *!/
userRouter.get('/getUserList.vm', (req, res) => {

  UserController.getAll((result: any) => {

    console.log('in userRouter getUserList:', result.data);

    res.send({
      data: result.data,
      code: result.code
    });

  });

});

/!**
 * 修改用户
 *!/
userRouter.get('/updateUser.vm', (req, res) => {

  UserController.update({
      _id: req.query.id
    },
    {
      $set: {
        username: req.query.username,
        password: req.query.password
      }
    }, {multi: true}, (result: any) => {

    console.log('in userRouter updateUser:', result.data);

    res.send({
      data: result.data,
      code: result.code
    });

  });

});
*/


export default userRouter;

