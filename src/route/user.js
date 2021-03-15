const express = require('express');
const Router = express.Router();
const UserController = require('../controllers/UserController');

Router.get('/', UserController.index)
      .post('/', UserController.create)

module.exports = Router;