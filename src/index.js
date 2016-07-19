/**
 * Created by JimBarrows on 7/18/16.
 */
'use strict';
console.log('Required by ' + module.parent.filename);
const mongoose = require('mongoose')
		, Promise  = require('bluebird');

mongoose.Promise  = Promise;
const db          = mongoose.connect('mongodb://mongo/pinecone');
module.exports.db = db;

var Account = require('./Account');
var Content = require('./Content');
var Channel = require('./Channel');

module.exports.Account = Account;
module.exports.Content = Content;
module.exports.Channel = Channel;
