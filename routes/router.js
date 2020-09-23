// import Express from 'express';
// import Connection from '../db-con';
// import Covid from '../models/covid-19-model';

const express = require('express');
const router = express.Router();
const covidController = require('../controllers/covidController');

router.route('/continents').get(covidController.continents);
router.route('/continent/:key/:continent').get(covidController.continent);
router.route('/country/:key/:country').get(covidController.country);

module.exports = router;