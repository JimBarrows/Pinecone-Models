/**
 * Created by JimBarrows on 8/16/16.
 */
'use strict';

import Campaign from "../src/Campaign";

describe("How campaign works", () => {

	var campaign = {};

	beforeEach(()=> {
		campaign = new Campaign();
	});

	it("should allow multiple facebook accounts", () => {
		campaign.facebookAccounts.push({
			name: "test fb",
			pageId: "pageId",
			accessToken: "accessToke"
		});
		expect(campaign.facebookAccounts.length).toBe(1);
	});

	it('should allow multiple twitter accounts', () => {
		campaign.twitterAccounts.push({
			accessToken: "accessToken",
			accessTokenSecret: "access token secret",
			name: "name",
			ownerId: "owner id",
			owner: "owner"
		});
		expect(campaign.twitterAccounts.length).toBe(1);
	});

	it('should allow multiple WordPress accounts', () => {
		campaign.wordPressAccounts.push({
			name: "accessToken",
			username: "access token secret",
			password: "name",
			url: "owner id"
		});
		expect(campaign.wordPressAccounts.length).toBe(1);
	});

	it('should allow multiple messages', () => {
		campaign.messages.push({
			name: "accessToken",
			description: "access token secret"
		});
		expect(campaign.messages.length).toBe(1);
	});

	it('should allow multiple keywords', () => {
		campaign.keywords.push({
			name: "accessToken"
		});
		expect(campaign.keywords.length).toBe(1);
	});

	it('should allow multiple destinations', () => {
		campaign.destinations.push({
			name: "accessToken",
			type: "accessToken"
		});
		expect(campaign.destinations.length).toBe(1);
	});

	it('should allow multiple assets', () => {
		campaign.assets.push({
			name: "accessToken",
			description: "accessToken"
		});
		expect(campaign.assets.length).toBe(1);
	});

	it("must return a total budget of 2000 with two budget items with a total of 1,000 each", () => {

		let campaign = new Campaign({
			budgetLineItems: [{
				name: "Test line item 1",
				unitCost: 100,
				quantity: 10
			}, {
				name: "Test line item 1",
				unitCost: 10,
				quantity: 100
			}]
		});

		expect(campaign.totalCost()).toBe(2000);

	});

	it("must return a total of 0 with no budget items.", () => {
		let campaign = new Campaign({});

		expect(campaign.totalCost()).toBe(0);
	})
})