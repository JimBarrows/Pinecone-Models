'use strict';
const mongoose              = require('mongoose'),
      Schema                = mongoose.Schema,
      Types                 = Schema.Types,
      passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
	facebookId: Types.String,
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);