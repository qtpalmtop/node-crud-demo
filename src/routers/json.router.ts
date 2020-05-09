import express from 'express';
import cookieParse from 'cookie-parser';

import JsonController from '../controllers/json.controller';

const jsonRouter = express.Router();

jsonRouter.use(cookieParse());
jsonRouter.use(express.urlencoded({ extended: false }));

/**
 * 获取json
 */
jsonRouter.get('/getJson.vm', JsonController.getJson);

export default jsonRouter;
