
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
/**
 * Children Schema
 */

var SchemaTypes = mongoose.Schema.Types;

var photoSchema = new mongoose.Schema({
  imageName: String,
  imageDate: Date
});


var ChildrenSchema = new Schema({
  firstName:                          { type: String, required: true },
  lastName:                           { type: String, required: true },
  gender:                             { type: String, required: true },
  primaryPhoto:                       { "imageName": String, "imageDate": Date},
  additionalPhotos:                   [ photoSchema ],
  biography:                          { type: String },
  eligibleForSponsorship:             { type: Boolean },
  sponsorshipType :                   { type: Number },
  fundingType:                        { type: Number },
  dob:                                { type: Date, required: true },  
  dateCreated:                        { type: Date },
  createdBy:                          { type: String },
  dateUpdated:                        { type: Date },
  updatedBy:                          { type: String },
  biographyUpdated:                   { type: Date },
  deleted:                            { type: Boolean },
  legacySponsored:                    { type: Boolean }
});

module.exports = mongoose.model('Children', ChildrenSchema);