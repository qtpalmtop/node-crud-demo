import express from 'express';
import {Router} from 'express';
import cookieParse from 'cookie-parser';

// import model from 'models';

const router = Router();

router.use(cookieParse());
router.use(express.urlencoded({ extended: true }));

/**
 * 增加用户
 */
router.get('/addUser', (req, res) => {
  console.log('in addUser: req', req);

  res.end(JSON.stringify({
    data: 'goto addUser',
    code: 200
  }));
});

/**
 * 删除用户
 */
router.get('/deleteUser', (req, res) => {
  res.end(JSON.stringify({
    data: 'goto deleteUser',
    code: 200
  }));
});

/**
 * 查询用户
 */
router.get('/queryUser', (req, res) => {
  res.end(JSON.stringify({
    data: 'goto queryUser',
    code: 200
  }));
});

/**
 * 增加用户列表
 */
router.get('/getUserList', (req, res) => {
  res.end(JSON.stringify({
    data: 'goto getUserList',
    code: 200
  }));
});

/**
 * 修改用户
 */
router.get('/updateUser', (req, res) => {
  res.end(JSON.stringify({
    data: 'goto updateUser',
    code: 200
  }));
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

