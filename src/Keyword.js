'use strict';
const mongoose = require('mongoose'),
      Schema   = mongoose.Schema,
      Types    = mongoose.Schema.Types;

var Keyword = new Schema({
	name: Types.String,
	campaignUses: Types.Number,
	contentUses: types.Number
});

export default mongoose.model('Keyword', Keyword);