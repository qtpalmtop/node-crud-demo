/**
 * Created by lilin on 19-11-19
 */

export class BaseDao {
  model: any;

  constructor(newModel: any) {
    this.model = newModel;
  }

  /**
   * 创建
   * @param docs any[] 新建对象集合
   * @param callback function
   */
  create(docs: any[], callback: any) {

    this.model.create(docs, (error: any) => {
      if (error) {
        return callback({data: null, code: 500});
      }

      return callback({data: 'success', code: 200});
    });

  }

  /**
   * 查询
   * @param params any 查询条件
   * @param callback function
   */
  query(conditions: any, callback: any) {

    this.model.findOne(conditions, (error: any, result: any) => {

      if (error) {
        return callback({data: null, code: 500});
      }

      return callback({data: result, code: 200});
    });

  }

  /**
   * 查询所有数据
   * @param callback function
   */
  getAll(callback: any) {
    this.model.find({}, (error: any, result: any) => {

      if (error) {
        return callback({data: null, code: 500});
      }

      return callback({data: result, code: 200});

    });
  }

  /**
   * 删除
   * @param params any 删除条件
   * @param callback function
   */
  delete(conditions: any, callback: any) {

    this.model.remove(conditions, (error: any) => {

      if (error) {
        return callback({data: null, code: 500});
      }

      return callback({data: 'success', code: 200});

    });

  }

  /**
   * 更新
   * @param conditions any 更新条件
   * @param doc any 更新后的对象
   * @param options any 更新选项
   * @param callback function
   */
  update(conditions: any, doc: any, options: any, callback: any) {

    this.model.update(conditions, doc, options, (error: any) => {

      if (error) {
        return callback({data: null, code: 500});
      }
      return callback({data: 'success', code: 200});

    });

  }

}


