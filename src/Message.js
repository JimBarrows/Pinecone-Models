'use strict';
import mongoose from "mongoose";
const Schema = mongoose.Schema,
      Types  = mongoose.Schema.Types;

var Messages = new Schema({
	name: Types.String,
	description: Types.String,
	campaignUses: Types.Number,
	contentUses: types.Number
});

export default mongoose.model('Messages', Messages);