'use strict';
console.log('Required by ' + module.parent.filename);
console.log('module.parent: ', module.parent);
const db                    = module.parent.db,
      mongoose              = require('mongoose'),
      Schema                = mongoose.Schema,
      passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({});

Account.plugin(passportLocalMongoose);

module.exports = db.model('Account', Account);