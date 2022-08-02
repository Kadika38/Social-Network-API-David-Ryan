const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: String,
    email: String,
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
    /* toJSON: {
      virtuals: true,
    }, */
    id: true,
  }
);

// TODO: make a friendcount virtual

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;