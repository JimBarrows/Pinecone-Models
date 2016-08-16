'use strict';
import mongoose from "mongoose";
const Schema = mongoose.Schema,
      Types  = mongoose.Schema.Types;


const BudgetLineItem = new Schema({
	name: Types.String,
	unitCost: Types.Number,
	quantity: {type: Types.Number, default: 1},
});

BudgetLineItem.methods.total = function () {
	return (this.unitCost * this.quantity)
}

export default BudgetLineItem;