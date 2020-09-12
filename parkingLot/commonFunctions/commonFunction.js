const timestamp = () => {
    return Date.now()
}

const getImagePathFromCmd = () => {
    const imagePath = process.argv[2];
    if (!imagePath) {
        console.log('Please add an image path after the node app.js command');
        return;
    }
    return imagePath
}

const isNumberBetween = (n, a, b) => {
    return (n - a) * (n - b) <= 0
}

const fixCarsNumber = (numberPlate) =>  {
    let fixCarNumber = numberPlate.replace(/[^A-Z0-9]/ig, "")
    return fixCarNumber;
}

module.exports = {
    timestamp,
    getImagePathFromCmd,
    isNumberBetween,
    fixCarsNumber
}