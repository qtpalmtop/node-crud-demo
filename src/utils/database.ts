import mongoose from 'mongoose';

// 自定义配置
import systemConfig from '../config';

export default new Promise((resolve, reject) => {

  mongoose.connect(systemConfig.database, { useCreateIndex: true, useNewUrlParser: true });

  mongoose.connection.once('open', err => {

    if (!err) {
      console.log('数据库连接成功');
      resolve(true);
    }

    else {
      console.log('数据库连接失败', err);
      reject(err);
    }
  });
});
