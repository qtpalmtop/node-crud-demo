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
        return callback(error);
      }

      return callback(docs);
    });

  }

  getById(id: any, callback: any) {

    this.model.findOne({_id: id}, (error: any, data: any) => {

      if (error) {
        return callback(error, null);
      }

      return callback(null, data);
    });

  }

  getAll(callback: any) {
    this.model.find({}, (error: any, data: any) => {

      if (error) {
        return callback(error, null);
      }

      return callback(null, data);

    });
  }

  delete(query: any, callback: any) {

    this.model.remove(query, (error: any) => {

      if (error) {
        return callback(error);
      }

      return callback(null);

    });

  }

  update(conditions: any, update: any, options: any, callback: any) {

    this.model.update(conditions, update, options, (error: any) => {

      if (error) {
        return callback(error);
      }
      return callback(null);

    });

  }

}
