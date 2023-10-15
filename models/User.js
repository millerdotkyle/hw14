const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must be valid email']
  },
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
  },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
    friends: [
      {
          type: Schema.Types.ObjectId,
          ref: 'user'
      }
  ],
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` that counts user's friends
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return `${friends.length} friends`;
  })

const User = model('user', userSchema);

module.exports = User;