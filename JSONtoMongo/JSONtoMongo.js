'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Listing = require('./ListingSchema_v2.js'), 
    config = require('./config.js'),
    listingData= require('./children_vThree.json');

/* Connect to your database */
mongoose.connect(config.db.uri);
/*Creates and logs the success*/
//console.log(listingData.entries);
Listing.create(listingData.entries, finished);
function finished(){
	mongoose.disconnect();
};
/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */
