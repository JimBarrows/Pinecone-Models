/**
 * Created by JimBarrows on 8/6/16.
 */
'use strict';
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const Types  = Schema.Types;


const TwitterChannel = new Schema({
	accessToken: Types.String,
	accessTokenSecret: Types.String,
	name: Types.String,
	ownerId: Types.String,
	owner: Types.String
});

export default TwitterChannel;
