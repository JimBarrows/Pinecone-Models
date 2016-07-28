'use strict';
const mongoose              = require('mongoose'),
      Schema                = mongoose.Schema,
      Types                 = Schema.Types,
      passportLocalMongoose = require('passport-local-mongoose');

var TwitterAccount = new Schema({
	ownerId: Types.String,
	owner: Types.String,
	accessToken: Types.String,
	accessTokenSecret: Types.String
});

var Account = new Schema({
	facebookUserId: Types.String,
	accessToken: Types.String,
	expiresIn: Types.Date,
	twitterAccounts: [TwitterAccount]
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);