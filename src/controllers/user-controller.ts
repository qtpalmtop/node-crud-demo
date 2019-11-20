
import { MainController } from './main-controller';
import userModel from '../models/user-model';

const UserController = new MainController(userModel);

export default UserController;
