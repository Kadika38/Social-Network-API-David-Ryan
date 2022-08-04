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
        username: {
            type: String,
            required: true,
        },
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

  thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  })
  
  const Thought = model('thought', thoughtSchema);
  
  module.exports = Thought;