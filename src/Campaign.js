'use strict';
import Asset from "./Asset";
import BudgetLineItem from "./BudgetLineItem";
import Destination from "./Destination";
import FacebookAccountInfo from "./FacebookAccountInfo";
import Keyword from "./Keyword";
import mongoose from "mongoose";
import Message from "./Message";
import Objective from "./Objective";
import Tag from "./Tag";
import TwitterAccountInfo from "./TwitterAccountInfo";
import WordPressAccountInfo from "./WordPressAccountInfo";


const Schema = mongoose.Schema,
      Types  = mongoose.Schema.Types;

const Campaign = new Schema({
	assets: [Asset],
	budgetLineItems: [BudgetLineItem],
	destinations: [Destination],
	effectiveFrom: Types.Date,
	effectiveThru: Types.Date,
	facebookAccounts: [FacebookAccountInfo],
	keywords: [Keyword],
	messages: [Message],
	name: Types.String,
	objectives: [Objective],
	owner: Types.ObjectId,
	tags: [Tag],
	twitterAccounts: [TwitterAccountInfo],
	wordPressAccounts: [WordPressAccountInfo]
});

Campaign.methods.totalCost = function () {
	if (this.budgetLineItems && this.budgetLineItems.length > 0) {
		return this.budgetLineItems.reduce((prev, cur) => prev + cur.total(), 0);
	} else {
		return 0;
	}

}

export default mongoose.model('Campaign', Campaign);