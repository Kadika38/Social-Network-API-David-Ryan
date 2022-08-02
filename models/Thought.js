const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
    {
      thoughtText: String,
      username: String,
      reactions: [Reaction],
    },
    {
      /* toJSON: {
        virtuals: true,
      }, */
      id: true,
    }
  );

  // TODO: make a reactionCount virtual
  
  const Thought = model('thought', thoughtSchema);
  
  module.exports = Thought;