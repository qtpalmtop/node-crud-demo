import util from 'util';
import crypto from 'crypto';

import { BaseDao } from '../utils/base-dao';
import userModel from '../models/user-model';

const UserDao = new BaseDao(userModel);

const UserController = {

  // getUser(req: any, res: any) {
  //   console.log('in UserController getUser:req, res', req, res);
  // },
  //
  // listUser(req: any, res: any) {
  //
  //   let reqBody: any|string = '';
  //
  //   // 获取请求体数据
  //   req.on('data', (chunk:any) => {
  //     reqBody += chunk;
  //   });
  //
  //   // 请求数据获取完成
  //   req.on('end', () => {
  //     reqBody = JSON.parse(reqBody || '{}');
  //
  //     const resBody = reqBody;
  //
  //     res.send(resBody);
  //
  //   });
  //
  // },

  createUser(req: any, res: any) {

    console.log('in createUser: req', req);

    console.log('Cookies: ' + util.inspect(req.cookies));

    let reqBody: any|string = '';

    // 获取请求体数据
    req.on('data', (chunk: any) => {
      reqBody += chunk;
    });

    // 请求数据获取完成
    req.on('end', () => {

      reqBody = JSON.parse(reqBody || '{}');

      console.log('in createUser: req.body', reqBody);

      UserDao.create([
        {
          username: reqBody.username,
          password: crypto.createHash('sha256').update(reqBody.password).digest('hex')
        }
      ], (result: any) => {

        console.log('in userRouter createUser:', result);

        res.send(result);

      });

    });

  },

  getUser(req: any, res: any) {

    console.log('in userRouter queryUser req:', req);

    let reqBody: any|string = '';

    // 获取请求体数据
    req.on('data', (chunk: any) => {
      reqBody += chunk;
    });

    // 请求数据获取完成
    req.on('end', () => {

      reqBody = JSON.parse(reqBody || '{}');

      console.log('in createUser: req.body', reqBody);

      UserDao.query(reqBody, (result: any) => {

        console.log('in userRouter queryUser:', result.data);

        res.send(result);

      });

    });

  },

  getUserList(req: any, res: any) {

    let reqBody: any|string = '';

    // 获取请求体数据
    req.on('data', (chunk: any) => {
      reqBody += chunk;
    });

    // 请求数据获取完成
    req.on('end', () => {

      reqBody = JSON.parse(reqBody || '{}');

      console.log('in createUser: req.body', reqBody);

      UserDao.getAll((result: any) => {

        console.log('in userRouter getUserList:', result.data);

        res.send(result);

      });

    });

  },

  updateUser(req: any, res: any) {

    let reqBody: any|string = '';

    // 获取请求体数据
    req.on('data', (chunk: any) => {
      reqBody += chunk;
    });

    // 请求数据获取完成
    req.on('end', () => {

      reqBody = JSON.parse(reqBody || '{}');

      reqBody.password = crypto.createHash('sha256').update(reqBody.password).digest('hex');

      console.log('in createUser: req.body', reqBody);

      UserDao.update({
          _id: reqBody.id
        },
        {
          $set: reqBody
        }, {}, (result: any) => {

          console.log('in userRouter updateUser:', result.data);

          res.send(result);

        });

    });

  },

  deleteUser(req: any, res: any) {

    let reqBody: any|string = '';

    // 获取请求体数据
    req.on('data', (chunk: any) => {
      reqBody += chunk;
    });

    // 请求数据获取完成
    req.on('end', () => {

      reqBody = JSON.parse(reqBody || '{}');

      console.log('in createUser: req.body', reqBody);

      UserDao.delete(reqBody, (result: any) => {

        console.log('in userRouter deleteUser:', result);

        res.send(result);

      });

    });

  }

};

export default UserController;
