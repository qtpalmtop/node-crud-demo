
import { MainController } from './mainController';
import userModel from '../models/userModel';

const UserController = new MainController(userModel);

export default UserController;
