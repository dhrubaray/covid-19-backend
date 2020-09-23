// import Mongoose from 'mongoose';
const mongoose = require('mongoose');

const covidSchema = new mongoose.Schema({
    PEOPLE_POSITIVE_CASES_COUNT: Number,
    COUNTY_NAME: String,
    PROVINCE_STATE_NAME: String,
    REPORT_DATE: Date,
    CONTINENT_NAME: String,
    DATA_SOURCE_NAME: String,
    PEOPLE_DEATH_NEW_COUNT: Number,
    COUNTY_FIPS_NUMBER: String,
    COUNTRY_ALPHA_3_CODE: String,
    COUNTRY_SHORT_NAME: String,
    COUNTRY_ALPHA_2_CODE: String,
    PEOPLE_POSITIVE_NEW_CASES_COUNT: Number,
    PEOPLE_DEATH_COUNT: Number
});

module.exports = mongoose.model('Covid', covidSchema, 'covid_19_activity');