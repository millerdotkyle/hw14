const connection = require('../config/connection');
const { Thought, User, Reaction } = require('../models');
const { getRandomUsers, getRandomThoughts, getRandomFriends, getReactions, getRandomUsername, getRandomEmail } = require('./data');

connection.once('open', async () => {
  await Thought.deleteMany({});
  await User.deleteMany({});
  await Reaction.deleteMany({});

 
  const users = [];

  const thoughts = getRandomThoughts(10);

  for (let i = 0; i < 10; i++) {
    const username = getRandomUsername();
    const email = getRandomEmail();

    users.push({ username, email, thoughts: [thoughts[i]] });
  }

await User.collection.insert(users);
await Thought.collection.insert(thoughts);
  

console.log('Seeded!');

});