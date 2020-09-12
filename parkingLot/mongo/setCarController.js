const Cars = require('./carModel')

function addCarsToDb(timestamp, car_number, permitted) {

    const cars_data = [
        {
            timestamp,
            car_number,
            permitted
        },
    ];

    Cars.create(cars_data, function (err, results) {
        if (err) throw err;

        console.log(results)
    });
}

module.exports = {
    addCarsToDb
}