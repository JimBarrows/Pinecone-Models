'use strict';
const db       = module.parent.db,
      mongoose = require('mongoose'),
      Schema   = mongoose.Schema,
      Types    = Schema.Types;

var WordPressDestination = new Schema({
	name: Types.String,
	username: Types.String,
	password: Types.String,
	url: Types.String
});

var FacebookDestination = new Schema({
	accessToken: Types.String,
	expiresIn: Types.Date,
	signedRequest: Types.String,
	userId: Types.String
});

var TwitterDestination = new Schema({
	access_token_key: Types.String,
	access_token_secret: Types.String
});

var Channel = new Schema({
	name: Types.String,
	owner: Types.ObjectId,
	wordPressDestinations: [WordPressDestination],
	facebookDestinations: [FacebookDestination],
	twitterDestinations: [TwitterDestination]
});

module.exports = db.model('Channel', Channel);