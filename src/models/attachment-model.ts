import { Schema, model } from 'mongoose';

const attachmentSchema = new Schema({
  fileName: {
    type: String,
    required: true
  },
  filePath: {
    type: String,
    required: true
  },
  fileSize: {
    type: Number,
    required: true
  },
  mimeType: {
    type: String,
    required: true
  }
});

const attachmentModel = model('attachment', attachmentSchema);

export default attachmentModel;
