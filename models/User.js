const { Schema, model } = require('mongoose');

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

// TODO: make a thoughts virtual

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;