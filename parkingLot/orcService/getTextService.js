const ocrSpaceApi = require('ocr-space-api-alt2');
const configService = require('../serviceConfig/serviceConfig')

const getTextFromImage = async (imagePath) => {
    try {
        return await ocrSpaceApi(imagePath, configService.options);
    } catch (error) {
        return error
    }
}

module.exports = {
    getTextFromImage
}






