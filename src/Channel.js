'use strict';
const mongoose = require('mongoose'),
      Schema   = mongoose.Schema,
      Types    = Schema.Types;
import TwitterChannel from "./TwitterChannel";

var WordPressDestination = new Schema({
	name: Types.String,
	username: Types.String,
	password: Types.String,
	url: Types.String
});

var FacebookDestination = new Schema({
	name: Types.String,
	pageId: Types.String,
	accessToken: Types.String
});


var Channel = new Schema({
	name: Types.String,
	owner: Types.ObjectId,
	wordPressDestinations: [WordPressDestination],
	facebookDestinations: [FacebookDestination],
	TwitterChannels: [TwitterChannel]
});

module.exports = mongoose.model('Channel', Channel);