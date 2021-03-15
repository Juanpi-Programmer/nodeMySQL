const db = require('../config/db');

const index = (req, res) => {
    db.query('SELECT * from user', (err, results, fields) => {
        if(err) throw err
        console.log(results);
    });
    return null;
};

const show = (req, res) => {
    return null;
};

const create = (req, res) => {
    return null;
};

const update = (req, res) => {
    return null;
};

const destroy = (req, res) => {
    return null;

};

const find = (req, res) => {
    return null;
};

module.exports = {
    index, create, update, show, destroy, find
}