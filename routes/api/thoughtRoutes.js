const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought);

router.route('/:thoughtId/react').post(addReaction);

router.route('/:thoughtId/react/:reactionId').delete(deleteReaction);

module.exports = router;