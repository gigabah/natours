const express = require('express');

// Handlers were added to controller
const tourController = require('./../controllers/tourController');

const router = express.Router();

router.route('/') // was api/v1/tours before express routing
    .get(tourController.getAllTours)
    .post(tourController.createTour);

router.route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour)

module.exports = router;