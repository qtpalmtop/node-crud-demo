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
router.get('/createUser.vm', (req, res) => {
  console.log('in createUser: req', req);

  UserController.create([
    {
      username: req.query.username || '',
      password: req.query.password || ''
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
router.get('/deleteUser.vm', (req, res) => {

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
router.get('/getUser.vm', (req, res) => {

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
router.get('/getUserList.vm', (req, res) => {

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
router.get('/updateUser.vm', (req, res) => {

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

/**
 * 创建用户
 */
router.post('/createUser.vm', (req, res) => {
  console.log('in createUser: req', req);

  let reqBody: any = '';

  // 获取请求体数据
  req.on('data', chunk => {
    reqBody += chunk;
  });

  // 请求数据获取完成
  req.on('end', () => {

    reqBody = JSON.parse(reqBody || '{}');

    console.log('in createUser: req.body', reqBody);

    UserController.create([
      {
        username: reqBody.username,
        password: reqBody.password
      }
    ], (result: any) => {

      console.log('in router createUser:', result);

      res.end(JSON.stringify({
        data: result.data,
        code: result.code
      }));

    });

  });

});

/**
 * 删除用户
 */
router.post('/deleteUser.vm', (req, res) => {

  let reqBody: any = '';

  // 获取请求体数据
  req.on('data', chunk => {
    reqBody += chunk;
  });

  // 请求数据获取完成
  req.on('end', () => {

    reqBody = JSON.parse(reqBody || '{}');

    console.log('in createUser: req.body', reqBody);

    UserController.delete(reqBody, (result: any) => {

      console.log('in router deleteUser:', result);

      res.end(JSON.stringify({
        data: result.data,
        code: result.code
      }));

    });

  });

});

/**
 * 查询用户
 */
router.post('/getUser.vm', (req, res) => {

  console.log('in router queryUser query:', req.query);

  let reqBody: any = '';

  // 获取请求体数据
  req.on('data', chunk => {
    reqBody += chunk;
  });

  // 请求数据获取完成
  req.on('end', () => {

    reqBody = JSON.parse(reqBody || '{}');

    console.log('in createUser: req.body', reqBody);

    UserController.query(reqBody, (result: any) => {

      console.log('in router queryUser:', result.data);

      res.end(JSON.stringify({
        data: result.data,
        code: result.code
      }));

    });

  });

});

/**
 * 增加用户列表
 */
router.post('/getUserList.vm', (req, res) => {

  let reqBody: any = '';

  // 获取请求体数据
  req.on('data', chunk => {
    reqBody += chunk;
  });

  // 请求数据获取完成
  req.on('end', () => {

    reqBody = JSON.parse(reqBody || '{}');

    console.log('in createUser: req.body', reqBody);

    UserController.getAll((result: any) => {

      console.log('in router getUserList:', result.data);

      res.end(JSON.stringify({
        data: result.data,
        code: result.code
      }));

    });

  });

});

/**
 * 修改用户
 */
router.post('/updateUser.vm', (req, res) => {

  let reqBody: any = '';

  // 获取请求体数据
  req.on('data', chunk => {
    reqBody += chunk;
  });

  // 请求数据获取完成
  req.on('end', () => {

    reqBody = JSON.parse(reqBody || '{}');

    console.log('in createUser: req.body', reqBody);

    UserController.update({
        _id: reqBody.id
      },
      {
        $set: reqBody
      }, {}, (result: any) => {

        console.log('in router updateUser:', result.data);

        res.end(JSON.stringify({
          data: result.data,
          code: result.code
        }));

      });

  });

});

export default router;

