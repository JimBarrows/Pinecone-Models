'use strict';
import Asset from "./Asset";
import Destination from "./Destination";
import FacebookAccountInfo from "./FacebookAccountInfo";
import Keyword from "./Keyword";
import Message from "./Message";
import mongoose from "mongoose";
import PassportLocalMongoose from "passport-local-mongoose";
import TwitterAccountInfo from "./TwitterAccountInfo";
import WordPressAccountInfo from "./WordPressAccountInfo";

const Schema = mongoose.Schema;


export const AccountSchema = new Schema({
	facebookAccounts: [FacebookAccountInfo],
	twitterAccounts: [TwitterAccountInfo],
	wordPressAccounts: [WordPressAccountInfo],
	messages: [Message],
	keywords: [Keyword],
	destinations: [Destination],
	assets: [Asset]
});

AccountSchema.plugin(PassportLocalMongoose);

const Account = mongoose.model('Account', AccountSchema);

export default Account;