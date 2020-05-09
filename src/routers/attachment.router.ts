import express from 'express';
import cookieParse from 'cookie-parser';
import multer from 'multer';

import AttachmentController from '../controllers/attachment.controller';

const attachmentRouter = express.Router();

attachmentRouter.use(cookieParse());
attachmentRouter.use(express.urlencoded({ extended: false }));
attachmentRouter.use(multer({
  // 默认上传路径
  dest: '/tmp/'
})
// fieldName 字段名, maxCount 最多上传数
.array('attachment', 5));

/**
 * 上传附件
 */
attachmentRouter.post('/uploadAttachment.vm', AttachmentController.uploadAttachment);

export default attachmentRouter;
