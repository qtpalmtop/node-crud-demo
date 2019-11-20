/**
 * Created with Sublime Text3.
 * User: 李霖
 * Date: 19-11-19
 * Time: 下午4:34
 * To change this template use File | Settings | File Templates.
 */


export class MainController {
  model: any;

  constructor(newModel: any) {
    this.model = newModel;
  }

  // create
  create(docs: any[], callback: any) {

    this.model.create(docs, (error: any) => {
      if (error) {
        return callback({data: null, code: 500});
      }

      return callback({data: 'success', code: 200});
    });

  }

  query(params: string, callback: any) {

    this.model.findOne(params, (error: any, result: any) => {

      if (error) {
        return callback({data: null, code: 500});
      }

      return callback({data: result, code: 200});
    });

  }

  getAll(callback: any) {
    this.model.find({}, (error: any, result: any) => {

      if (error) {
        return callback({data: null, code: 500});
      }

      return callback({data: result, code: 200});

    });
  }

  delete(query: any, callback: any) {

    this.model.remove(query, (error: any) => {

      if (error) {
        return callback({data: null, code: 500});
      }

      return callback({data: 'success', code: 200});

    });

  }

  update(conditions: any, update: any, options: any, callback: any) {

    this.model.update(conditions, update, options, (error: any) => {

      if (error) {
        return callback({data: null, code: 500});
      }
      return callback({data: 'success', code: 200});

    });

  }

}
