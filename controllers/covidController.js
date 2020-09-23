const { request, response } = require('express');
const Utils = require('../lib/utils.js');

let Covid = require('../models/Covid');

exports.continents = async (req, res) => {
    let continents = await Covid.collection.distinct('CONTINENT_NAME');
    console.log(continents);
    res.json({ "continents": continents });
};

exports.continent = async (req, res) => {
    let key = req.params.key;
    let continent = req.params.continent;

    if (continent == 'All') {
        try {
            let result = await Covid
                .aggregate([
                    {
                        $group: {
                            _id: "$COUNTRY_SHORT_NAME",
                            total: { $sum: `$${key}` }
                        }
                    }]);
            res.json({ "result": result });
        } catch (e) {
            console.log(e);
        }
    } else {
        let result = await Covid
            .aggregate(
                [{ $match: { CONTINENT_NAME: continent } },
                { $group: { _id: "$COUNTRY_SHORT_NAME", total: { $sum: `$${key}` } } }])
        res.json({ "result": result });
    }
};

exports.country = async (req, res) => {
    let key = req.params.key;
    let country = req.params.country;

    let result = await Covid
            .aggregate(
                [{ $match: { COUNTRY_SHORT_NAME: country } },
                { $group: { _id: "$PROVINCE_STATE_NAME", total: { $sum: `$${key}` } } }])
    if (country == 'United States') {
        let states = Utils.usaStatesShortNames();
        let newResult = [];
        result.map(state => newResult.push({...state, code: states[state._id]}));
        console.log(newResult);
        res.json({ "result": newResult });
        return;
    }

    res.json({ "result": result });
};
