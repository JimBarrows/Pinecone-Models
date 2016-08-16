'use strict';
import mongoose from "mongoose";
const Schema = mongoose.Schema,
      Types  = mongoose.Schema.Types;

const FacebookAccountInfo = new Schema({
	name: Types.String,
	pageId: Types.String,
	accessToken: Types.String
});

export default FacebookAccountInfo;