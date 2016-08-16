'use strict';
import mongoose from "mongoose";
const Schema = mongoose.Schema,
      Types  = mongoose.Schema.Types;

var FacebookAccountInfo = new Schema({
	name: Types.String,
	pageId: Types.String,
	accessToken: Types.String
});

export default mongoose.model('FacebookAccountInfo', FacebookAccountInfo);