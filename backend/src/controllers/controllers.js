const tourService = require('../services/tourService'); 
const tokenService = require('../services/apiTokenService');
const userService = require('../services/userService');

  const registerUserController = async (req, res) => {
    const {user} = req.body;
    const result = await userService.registerUser(user);
    res.sendStatus(201);
  }
  const getToursController = async (req, res) => {
    const {tourType} = req.query;
    const result = await tourService.getToursByType(tourType);
    res.send(result);
  };
  
  const getApiToken = async (req, res) => {
    const result = await tokenService.getApiToken();
    res.send(result);
  }
  
  const bookTourController = async (req, res) => {
    const result = await tourService.bookTour();
    res.sendStatus(201);
  }
  module.exports = {
    getToursController,
    getApiToken,
    registerUserController,
    bookTourController
  };
  