'use strict';
import mongoose from "mongoose";
const Schema = mongoose.Schema,
      Types  = mongoose.Schema.Types;

var Destination = new Schema({
	name: Types.String,
	type: Types.String,
	url: Types.String,
	campaignUses: Types.Number
});

export default mongoose.model('Destination', Destination);