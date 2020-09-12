const orcService = require('./orcService/getTextService');
const validationFunctions = require('./commonFunctions/conditionFunctions');
const commonFunctions = require('./commonFunctions/commonFunction');
const mongoConnection = require('./mongo/mongoConnction');
const setCarController = require('./mongo/setCarController');

mongoConnection.connnectToMongoDb()

const imagePath = commonFunctions.getImagePathFromCmd();

orcService.getTextFromImage(imagePath).then((numberPlate) => {

  const fixedCarNumber = commonFunctions.fixCarsNumber(numberPlate);

  const isPermitted = validationFunctions.isCarEntryPermitted(fixedCarNumber);

  setCarController.addCarsToDb(commonFunctions.timestamp(), fixedCarNumber, isPermitted);
});






