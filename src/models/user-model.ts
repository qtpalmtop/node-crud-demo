import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const userModel = model('user', userSchema);

export default userModel;
