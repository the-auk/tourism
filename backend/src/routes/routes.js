
/**
 * handles routes for incoming requests
 */
const express = require('express');
const router = express.Router();
const { getApiToken, getToursController, registerUserController, bookTourController } = require('../controllers/controllers');

router.post('/user', registerUserController);
router.get('/tours', getToursController);
router.get('/token', getApiToken);
router.post('/bookTour', bookTourController);

module.exports = router;
