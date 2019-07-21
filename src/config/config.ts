// "use strict";

/**
 * Loads the config and provides helper methods
 */
export class Config {

	private static config : any;
	private static devValuesArray : Array<string> = ["dev", "DEV", "development", "DEVELOPMENT"];
	private static prodValuesArray : Array<string> = ["prod", "PROD", "production", "PRODUCTION"];
	private static uatValuesArray : Array<string> = ["uat", "UAT"];
	private static localValuesArray : Array<string> = ["local", "LOCAL"];
	private static testValuesArray : Array<string> = ["test", "TEST"];
	

	/**
	 * Initialize the environment
	 */
	public static initialize () : void {
		let env : string = this.getEnvironment() || "DEV";
		this.config = require('../../src/config/config.json')[env];
	}
	/**
	 * Get Property Values For A Key
	 * @param  {string} key Property Key
	 * @return {any}        Can be a string or an object
	 */
	static getPropertyValue(key : string) : any {

		return this.config[key];
	}

	private static getEnvironment() : string {
		var environment:string = process.env.NODE_ENV;
		console.log("ENV var:", process.env.NODE_ENV);
		console.log("env",environment)
		if(environment && this.devValuesArray.indexOf(environment) > -1){
			return "DEV";
		} else if(environment && this.prodValuesArray.indexOf(environment) > -1) {
			return "PRODUCTION";
		} else if(environment && this.uatValuesArray.indexOf(environment) > -1) {
			return "UAT";
		}else if(environment && this.localValuesArray.indexOf(environment) > -1) {
			return "LOCAL";
		}else if(environment && this.testValuesArray.indexOf(environment) > -1) {
			return "TEST";
		}
		return null;
	}
}
Config.initialize();