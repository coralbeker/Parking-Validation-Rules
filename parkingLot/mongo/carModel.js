const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
    timestamp: String,
    car_number: String,
    permitted: Boolean
});

const Cars = mongoose.model('Cars', carSchema)

module.exports = Cars