/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE DB SCHEMA PLEASE EDIT db/wakanda_db_customSchema.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createUser = require('../security/security.js');

const db_wakanda_db_schema = [];
const db_wakanda_db = [];

/**
 * SCHEMA DB wakanda_db
 */



 /**
  * Company
  */
db_wakanda_db_schema.Company = new mongoose.Schema({
	name: {
		type: 'String'
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	company: {
		type: Schema.ObjectId,
		ref : "User"
	},
	*/
});


 /**
  * User
  */
db_wakanda_db_schema.User = new mongoose.Schema({
	mail: {
		type: 'String'
	},
	name: {
		type: 'String'
	},
	password: {
		type: 'String', 
		required : true
	},
	roles: [{
		type: 'String'
	}],
	surname: {
		type: 'String'
	},
	username: {
		type: 'String', 
		required : true
	},
	//RELATIONS
	company: {
		type: Schema.ObjectId,
		ref : "Company"
	},
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});



// Import schema customization
require('./wakanda_db_customSchema.js');
var wakanda_db_model = require('./wakanda_db_crud.js');

// Declare mongoose model

db_wakanda_db.Company = wakanda_db_model.connection.model('Company', db_wakanda_db_schema.Company );
db_wakanda_db.User = wakanda_db_model.connection.model('User', db_wakanda_db_schema.User );

module.exports = db_wakanda_db;

// Create ADMIN user if does not exist
createUser.createUser();
