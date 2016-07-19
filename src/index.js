/**
 * Created by JimBarrows on 7/18/16.
 */
'use strict';
const mongoose = require('mongoose')
		, Promise  = require('bluebird');

mongoose.Promise  = Promise;
mongoose.connect('mongodb://mongo/pinecone');

module.exports.mongoose = mongoose;

var Account = require('./Account');
var Content = require('./Content');
var Channel = require('./Channel');

module.exports.Account = Account;
module.exports.Content = Content;
module.exports.Channel = Channel;
