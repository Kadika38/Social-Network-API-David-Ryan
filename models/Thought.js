const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
      createdAt: {
        type: Date,
        default: () => { return Date.now(); },
        /* get: (date) => {

        } */
      },
      username: String,
      reactions: [Reaction],
    },
    {
      /* toJSON: {
        getters: true,
        virtuals: true,
      }, */
      id: true,
    }
  );

  // TODO: make a reactionCount virtual
  
  const Thought = model('thought', thoughtSchema);
  
  module.exports = Thought;