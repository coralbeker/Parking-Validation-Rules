const mongoose = require('mongoose');

const getDbConnectionString = '<connection_path>';

function connnectToMongoDb() {
    try {
        mongoose.connect(getDbConnectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

    } catch (error) {
        return error;
    }
}

module.exports = {
    connnectToMongoDb
}