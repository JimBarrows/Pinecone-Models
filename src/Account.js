'use strict';
const mongoose              = module.parent.mongoose,
      Schema                = mongoose.Schema,
      passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
	// username: Types.String,
	// password: Types.String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);