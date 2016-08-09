/**
 * Created by JimBarrows on 8/6/16.
 */
'use strict';
const mongoose = require('mongoose'),
      Schema   = mongoose.Schema,
      Types    = Schema.Types;


var TwitterChannel = new Schema({
	accessToken: Types.String,
	accessTokenSecret: Types.String,
	name: Types.String,
	ownerId: Types.String,
	owner: Types.String
});
module.exports     = TwitterChannel;
