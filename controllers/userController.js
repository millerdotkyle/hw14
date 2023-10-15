const User = require('../models/User');

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Get one user by id
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v')
        .populate('posts');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // update user by id
  async updateUser(req, res) {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            req.body,
            { new: true }
        );

        if(!user) {
            return res.status(404).json({ message: 'No user with that ID' });
        }

        res.status(200).json(user);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
  },
  // delete user by id
  async deleteUser(req, res) {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.userId });

        if(!user) {
            return res.status(404).json({ message: 'No user with that ID' });
        }

        res.status(200).json({ message: 'User deleted' });
    } catch(err) {
        res.status(500).json(err);
    }
  },
  // add friend to user
  async addFriend (req, res) {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        );

        if(!user) {
            return res.status(404).json({ message: 'No user with that ID' });
        }

        res.status(200).json(user);
    } catch(err) {
        res.status(500).json(err);
    }
  },
  // remove friend from user
  async removeFriend (req, res) {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true }
        );

        if(!user) {
            return res.status(404).json({ message: 'No user with that ID' });
        }

        res.status(200).json(user);
    } catch(err) {
        res.status(500).json(err);
    }
  }
};