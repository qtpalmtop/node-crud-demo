import express from 'express';
import {Router} from 'express';
import cookieParse from 'cookie-parser';

import UserController from '../controllers/user-controller';

const router = Router();

router.use(cookieParse());
router.use(express.urlencoded({ extended: true }));

/**
 * 创建用户
 */
router.get('/createUser', (req, res) => {
  console.log('in createUser: req', req);

  UserController.create([
    {
      username: req.query.username,
      password: req.query.password
    }
  ], (result: any) => {

    console.log('in router createUser:', result);

    res.end(JSON.stringify({
      data: result.data,
      code: result.code
    }));

  });

});

/**
 * 删除用户
 */
router.get('/deleteUser', (req, res) => {

  UserController.delete(req.query, (result: any) => {

    console.log('in router deleteUser:', result);

    res.end(JSON.stringify({
      data: result.data,
      code: result.code
    }));

  });

});

/**
 * 查询用户
 */
router.get('/getUser', (req, res) => {

  console.log('in router queryUser query:', req.query);

  UserController.query(req.query, (result: any) => {

    console.log('in router queryUser:', result.data);

    res.end(JSON.stringify({
      data: result.data,
      code: result.code
    }));

  });

});

/**
 * 增加用户列表
 */
router.get('/getUserList', (req, res) => {

  UserController.getAll((result: any) => {

    console.log('in router getUserList:', result.data);

    res.end(JSON.stringify({
      data: result.data,
      code: result.code
    }));

  });

});

/**
 * 修改用户
 */
router.get('/updateUser', (req, res) => {

  UserController.update({
      _id: req.query.id
    },
    {
      $set: {
        username: req.query.username,
        password: req.query.password
      }
    }, {multi: true}, (result: any) => {

    console.log('in router updateUser:', result.data);

    res.end(JSON.stringify({
      data: result.data,
      code: result.code
    }));

  });

});

router.post('/login', async (req, res) => {

  res.end(req);
  /*
  const { username, password } = req.body;
  const result = await model.findOne({ username, password: password });
  if (!result) {
    res.render('login', { err: { usernameloginerr: '用户名或密码错', username: username } })
    return;
  }
  const userid = result.id;
  res.cookie('userid', userid, {maxAge:1000*60*10});
  res.redirect('/usercenter');
  return;
  */
});

export default router;

