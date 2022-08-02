const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
      reactionsText: String,
      username: String,
    },
    {
      /* toJSON: {
        virtuals: true,
      }, */
      id: true,
    }
  );
  
  const Reaction = model('reaction', reactionSchema);
  
  module.exports = Reaction;