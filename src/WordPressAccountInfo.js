'use strict';
import mongoose from "mongoose";
const Schema = mongoose.Schema,
      Types  = mongoose.Schema.Types;

const WordPressAccountInfo = new Schema({
	name: Types.String,
	username: Types.String,
	password: Types.String,
	url: Types.String
});

export default mongoose.model('WordPressAccountInfo', WordPressAccountInfo);