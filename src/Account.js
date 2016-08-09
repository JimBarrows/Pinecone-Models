'use strict';
const mongoose              = require('mongoose'),
      Schema                = mongoose.Schema,
      Types                 = Schema.Types,
      passportLocalMongoose = require('passport-local-mongoose'),
      TwitterChannel        = require("./TwitterChannel");


var Account = new Schema({
	facebookUserId: Types.String,
	accessToken: Types.String,
	expiresIn: Types.Date,
	twitterChannels: [TwitterChannel]
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);