const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');
var moment = require('moment');

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
        get: (date) => {
            return moment(date).format("MMMM Do YYYY, h:mm a");
        },
      },
      username: String,
      reactions: [Reaction],
    },
    {
      toJSON: {
        getters: true,
        virtuals: true,
      },
      id: true,
    }
  );

  // TODO: make a reactionCount virtual
  
  const Thought = model('thought', thoughtSchema);
  
  module.exports = Thought;