import util from 'util';
import crypto from 'crypto';

import { BaseDao } from '../utils/base-dao';
import userModel from '../models/user-model';

const userDao = new BaseDao(userModel);

const UserController = {

  /**
   * 创建用户
   * @param any req 请求对象
   * @param any res 响应对象
   */
  createUser(req: any, res: any) {

    console.log('in createUser: req.body', req.body);

    console.log('Cookies: ' + util.inspect(req.cookies));

    // 请求体对象
    let reqBody: any|string = '';

    // 获取请求体数据
    req.on('data', (chunk: any) => {
      reqBody += chunk;
    });

    // 请求数据获取完成
    req.on('end', () => {

      // 解析请求体
      reqBody = JSON.parse(reqBody || '{}');

      // console.log('in createUser: req.body', reqBody);

      // 数据库中创建用户
      userDao.create([
        {
          username: reqBody.username,
          password: crypto.createHash('sha256').update(reqBody.password).digest('hex')
        }
      ], (result: any) => {

        res.send(result);

      });

    });

  },

  /**
   * 获取用户
   * @param any req 请求对象
   * @param any res 响应对象
   */
  getUser(req: any, res: any) {

    console.log('in userRouter queryUser req:', req);

    // 请求体对象
    let reqBody: any|string = '';

    // 获取请求体数据
    req.on('data', (chunk: any) => {
      reqBody += chunk;
    });

    // 请求数据获取完成
    req.on('end', () => {

      // 解析请求体
      reqBody = JSON.parse(reqBody || '{}');

      console.log('in createUser: req.body', reqBody);

      // 从数据库中查找用户
      userDao.query(reqBody, (result: any) => {

        res.send(result);

      });

    });

  },

  /**
   * 获取用户列表
   * @param any req 请求对象
   * @param any res 响应对象
   */
  getUserList(req: any, res: any) {

    // 请求体对象
    let reqBody: any|string = '';

    // 获取请求体数据
    req.on('data', (chunk: any) => {
      reqBody += chunk;
    });

    // 请求数据获取完成
    req.on('end', () => {

      // 解析请求体
      reqBody = JSON.parse(reqBody || '{}');

      console.log('in createUser: req.body', reqBody);

      // 数据库中获取用户列表
      userDao.getAll((result: any) => {

        res.send(result);

      });

    });

  },

  /**
   * 更新对象
   * @param any req 请求对象
   * @param any res 响应对象
   */
  updateUser(req: any, res: any) {

    // 请求体对象
    let reqBody: any|string = '';

    // 获取请求体数据
    req.on('data', (chunk: any) => {
      reqBody += chunk;
    });

    // 请求数据获取完成
    req.on('end', () => {

      // 解析请求体
      reqBody = JSON.parse(reqBody || '{}');

      reqBody.password = crypto.createHash('sha256').update(reqBody.password).digest('hex');

      console.log('in createUser: req.body', reqBody);

      // 数据库中更新用户
      userDao.update({
          _id: reqBody.id
        },
        {
          $set: reqBody
        }, {}, (result: any) => {

          res.send(result);

        });

    });

  },

  /**
   * 删除对象
   * @param any req 请求对象
   * @param any res 响应对象
   */
  deleteUser(req: any, res: any) {

    // 请求体对象
    let reqBody: any|string = '';

    // 获取请求体数据
    req.on('data', (chunk: any) => {
      reqBody += chunk;
    });

    // 请求数据获取完成
    req.on('end', () => {

      // 解析请求体
      reqBody = JSON.parse(reqBody || '{}');

      console.log('in createUser: req.body', reqBody);

      // 数据库中删除用户
      userDao.delete(reqBody, (result: any) => {

        res.send(result);

      });

    });

  }

};

export default UserController;
