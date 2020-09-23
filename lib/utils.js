const fs = require('fs');

exports.usaStatesShortNames = () => {
    try {
        data = JSON.parse(fs.readFileSync('data/data.json'));
        states = {};
        data.map(state => states[state.name] = state.abbreviation);
        return states;
    } catch (error) {
        console.log(error);
    }
}