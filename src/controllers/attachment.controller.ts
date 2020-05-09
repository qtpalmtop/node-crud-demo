import fs from 'fs';

import { BaseDao } from '../utils/base-dao';
import attachmentModel from '../models/attachment.model';
import systemConfig from '../config';

const AttachmentDao = new BaseDao(attachmentModel);

const AttachmentController = {

  uploadAttachment(req: any, res: any) {

    try {

      console.log('in file_upload:', req.files[0]);  // 待上传的文件信息

      const desFile = `${systemConfig.uploadPath}${req.files[0].originalname}`;

      console.log('in file_upload desFile:', desFile);  // 上传的文件位置

      AttachmentDao.create([
        {
          fileName: req.files[0].originalname,
          filePath: desFile,
          fileSize: req.files[0].size,
          mimeType: req.files[0].mimetype
        }
      ], (result: any) => {

        console.log('in attachmentRouter upload result:', result);

        fs.readFile(req.files[0].path, (readErr: any, data: any) => {

          fs.writeFile(desFile, data, (writeErr: any) => {

            if (writeErr) {
              console.log(writeErr);
            } else {

              res.send({
                filename: req.files[0].originalname,
                data: result.data,
                code: result.code
              });
            }

          });

        });

      });

    } catch (error) {
      console.log('in file_upload: error', error);
    }

  }

};

export default AttachmentController;
