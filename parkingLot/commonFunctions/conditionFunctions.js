const commonFunctions = require('./commonFunction')

const isPublicTransportationProhibited = (carNumber) => {
    const lastTwoDigits = carNumber.slice(-2);
    return commonFunctions.isNumberBetween(parseInt(lastTwoDigits), 25, 26);
}

const isMilitaryVehiclesProhibited = (carNumber) => {
    return /[a-z]/i.test(carNumber);
}

const isCarWithSevenDigitProhibited = (carNumber) => {
    const catNumberLength = carNumber.length;
    if (catNumberLength !== 7) {
        return false;
    }
    const carLastTwoDigits = carNumber.slice(-2);
    const isCarNumberBetween = commonFunctions.isNumberBetween(parseInt(carLastTwoDigits), 85, 89);
    return ((isCarNumberBetween || carLastTwoDigits === '00'));
}

const isGasCarProhibited = (carNumber) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    if (carNumber.length !== 7 && carNumber.length !== 8) {
        return false;
    }
    const convertToArryOfNumbers = carNumber.toString(10).replace(/\D/g, '0').split('').map(Number);
    const sum = convertToArryOfNumbers.reduce(reducer);
    return (sum % 7 === 0);
}


const isCarEntryPermitted = (carNumber) => {
    return (
        !isPublicTransportationProhibited(carNumber) &&
        !isMilitaryVehiclesProhibited(carNumber) &&
        !isCarWithSevenDigitProhibited(carNumber) &&
        !isGasCarProhibited(carNumber));
}


module.exports = {
    isCarEntryPermitted
}

