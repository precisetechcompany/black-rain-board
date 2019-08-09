"use strict";
// "use strict";
exports.__esModule = true;
/**
 * Loads the config and provides helper methods
 */
var Config = /** @class */ (function () {
    function Config() {
    }
    /**
     * Initialize the environment
     */
    Config.initialize = function () {
        var env = this.getEnvironment() || "DEV";
        this.config = require('../../src/config/config.json')[env];
    };
    /**
     * Get Property Values For A Key
     * @param  {string} key Property Key
     * @return {any}        Can be a string or an object
     */
    Config.getPropertyValue = function (key) {
        return this.config[key];
    };
    Config.getEnvironment = function () {
        var environment = process.env.NODE_ENV;
        console.log("ENV var:", process.env.NODE_ENV);
        console.log("env", environment);
        if (environment && this.devValuesArray.indexOf(environment) > -1) {
            return "DEV";
        }
        else if (environment && this.prodValuesArray.indexOf(environment) > -1) {
            return "PRODUCTION";
        }
        else if (environment && this.uatValuesArray.indexOf(environment) > -1) {
            return "UAT";
        }
        else if (environment && this.localValuesArray.indexOf(environment) > -1) {
            return "LOCAL";
        }
        else if (environment && this.testValuesArray.indexOf(environment) > -1) {
            return "TEST";
        }
        return null;
    };
    Config.devValuesArray = ["dev", "DEV", "development", "DEVELOPMENT"];
    Config.prodValuesArray = ["prod", "PROD", "production", "PRODUCTION"];
    Config.uatValuesArray = ["uat", "UAT"];
    Config.localValuesArray = ["local", "LOCAL"];
    Config.testValuesArray = ["test", "TEST"];
    return Config;
}());
exports.Config = Config;
Config.initialize();
