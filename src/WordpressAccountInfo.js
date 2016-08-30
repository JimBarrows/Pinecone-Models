'use strict';
import mongoose from "mongoose";
const Schema = mongoose.Schema,
      Types  = mongoose.Schema.Types;

const WordpressAccountInfo = new Schema({
	name: Types.String,
	username: Types.String,
	password: Types.String,
	url: Types.String
});

export default WordpressAccountInfo;