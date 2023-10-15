const router = require('express').Router();
const {
  getSingleThought,
  getThoughts,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:postId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route('/:postId/reactions').post(addReaction).delete(removeReaction);

module.exports = router;
