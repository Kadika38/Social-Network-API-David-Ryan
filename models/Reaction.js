const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: () => { return Date.now(); },
            get: (date) => {
                return moment(date).format("MMMM Do YYYY, h:mm a");
            },
        },
    },
    {
        /* toJSON: {
            virtuals: true,
        }, */
        id: true,
    }
  );
  
  module.exports = reactionSchema;