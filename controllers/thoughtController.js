const { Thought, User } = require('../models');
const { use } = require('../routes');

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Get one thought by id
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .populate('reactions');

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new thought
  async createThought(req, res) {
    try {
      const dbThoughtData = await Thought.create({ ...req.body, username: req.params.username },
        User.findOneAndUpdate(username, { $push: { thoughts: dbThoughtData._id } }, { new: true }));
      res.json(dbThoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // update thought by id
  async updateThought(req, res) {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            req.body,
            { new: true }
        );

        if(!thought) {
            return res.status(404).json({ message: 'No thought with that ID' });
        }

        res.status(200).json(thought);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
  },
  // delete thought by id
  async deleteThought(req, res) {
    try {
        const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

        if(!thought) {
            return res.status(404).json({ message: 'No thought with that ID' });
        }

        res.status(200).json(thought);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
  },
  // create a reaction
  async addReaction(req, res) {
    try {
      const dbReactionData = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $push: { reactions: req.body } },
        { new: true }
      );
      res.json(dbReactionData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // delete a reaction
  async removeReaction(req, res) {
    try {
      const dbReactionData = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      );
      res.json(dbReactionData);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};