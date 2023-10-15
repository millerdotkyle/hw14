const connection = require('../config/connection');
const { Thought, User } = require('../models');
const getRandomName = require('./data');

console.log(getRandomName());
connection.on('error', (err) => err);

connection.once('open', async () => {
  await Thought.deleteMany({});
  await User.deleteMany({});
  const users = await User.insertMany([
    {
      username: getRandomName(),
      email: '',
      thoughts: [],
      friends: [],
    },
  });
    


  await User.collection.insertMany(users);
  console.log(users);
  process.exit(0);
});
