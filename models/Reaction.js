const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
      reactionText: String,
      username: String,
    },
    {
      /* toJSON: {
        virtuals: true,
      }, */
      id: true,
    }
  );
  
  module.exports = reactionSchema;