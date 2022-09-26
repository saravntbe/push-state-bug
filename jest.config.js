var path = require('path')
module.exports = {
    setupFilesAfterEnv: [path.resolve(__dirname, './setup.js')],
    testEnvironment: "jest-environment-jsdom"
}