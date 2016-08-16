/**
 * Created by JimBarrows on 8/16/16.
 */
'use strict';
import BudgetLineItem from "../src/BudgetLineItem";
import mongoose from "mongoose";


const BLI = mongoose.model('BudgetLineItem', BudgetLineItem);

describe("How BudgetLineItem works", () => {
	describe("the total function", () => {

		it("should return 1,000 for a unit cost of 100, and quantity of 10", ()=> {
			let lineItem = new BLI({
				name: "Test line item",
				unitCost: 100,
				quantity: 10
			});
			expect(lineItem.total()).toBe(1000);
		});
	});
});