const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
      thoughtText: String,
      username: String,
      reactions: [
        {
          type: Schema.Types.ObjectId,
          ref: 'reaction',
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

  // TODO: make a reactionCount virtual
  
  const Thought = model('thought', thoughtSchema);
  
  module.exports = Thought;