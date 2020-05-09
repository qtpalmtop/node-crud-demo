import fs from 'fs';

import systemConfig from '../config';

const JsonController = {

  /**
   * 获取json
   * @param any req 请求对象
   * @param any res 响应对象
   */
  getJson(req: any, res: any) {

    console.log('in getJson: req', req);

    // json文件名
    const jsonName = req.query.jsonName;

    // json完整存放路径
    const jsonPath = `${systemConfig.jsonPath}${jsonName}.json`;

    fs.readFile(jsonPath, (readErr: any, result: any) => {

      res.send(result.toString('utf-8'));

    });

  }

};

export default JsonController;
