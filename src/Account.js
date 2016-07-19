'use strict';
const mongoose              = require('mongoose'),
      Schema                = mongoose.Schema,
      Types                 = Schema.Types,
      passportLocalMongoose = require('passport-local-mongoose');

console.log("Account schema");
var Account = new Schema({
	// username: Types.String,
	// password: Types.String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);