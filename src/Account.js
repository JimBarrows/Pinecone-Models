'use strict';
console.log('Required by ' + module.parent.filename);
console.log('module.parent: ', module.parent);
const mongoose              = module.parent.mongoose;
const Schema                = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
	// username: Types.String,
	// password: Types.String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);