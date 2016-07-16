const mongoose = require('mongoose')
		, Promise  = require('bluebird');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/pinecone');

module.exports = mongoose;
