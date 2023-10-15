const usernames = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    ``,
  ];
  
const possibleEmails = [
    'user1@example=com',
    'user2@example=com',
    'user3@example=com',
    'user4@example=com',
    'user5@example=com',
    'user6@example=com',
    'user7@example=com',
    'user8@example=com',
    'user9@example=com',
    'user10@example=com',
]


  const possibleThoughts = [
    'How to disagree with someone',
    'iPhone review',
    'how-to video',
    'video essay on the history of video games',
    'How to make money on the App Store',
    'Learn NextJS in five minutes (Not clickbate)',
    'Movie trailer',
    'Hello world',
    'Another possible solution to the algorithm',
    'Apology video',
  ];
  
  const possibleReactions = [
    'I disagree!',
    'I tried your algorithm, here were the results',
    'This was awesome',
    'Thank you for the great content',
    'Please check out my video response',
    'Like and subscribe to my channel please',
  ];
  
  const users = [];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomUsername = () =>
    {`${getRandomArrItem(usernames)}`;}

// Gets a random email
const getRandomEmail = () =>
  `${getRandomArrItem(possibleEmails)}`;
  
// Create a Random User
const getRandomUsers = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        username: getRandomUsername(),
        email: getRandomEmail(),
        thoughts: [...getRandomThoughts(3)],
        friends: [...getRandomFriends(3)],
      });
    }
    return results;
  };

// Create Random Friends
    const getRandomFriends = (int) => {
        let results = [];
        for (let i = 0; i < int; i++) {
        results.push({
            username: getRandomUsername(),
        });
        }
        return results;
    };


  //Create a Random Thought
  const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        createdAt: Math.random() < 0.5,
        thoughtText: getRandomArrItem(possibleThoughts),
        reactions: [...getReactions(3)],
      });
    }
    return results;
  };
  
  const getReactions = (int) => {
    if (int === 1) {
      return getRandomArrItem(possibleResponses);
    }
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        responseBody: getRandomArrItem(possibleResponses),
        username: getRandomName(),
      });
    }
    return results;
  };

  
  // Export the functions for use in seed.js
  module.exports = { getRandomUsers, getRandomThoughts, getRandomFriends, getReactions, getRandomUsername, getRandomEmail };
  