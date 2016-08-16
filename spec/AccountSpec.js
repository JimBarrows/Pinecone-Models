/**
 * Created by JimBarrows on 8/16/16.
 */
'use strict';
import Account from "../src/Account";

describe("Account model", () => {

	var account = {};
	beforeEach(()=> {
		account = new Account();
	});

	it("should allow multiple facebook accounts", () => {
		account.facebookAccounts.push({
			name: "test fb",
			pageId: "pageId",
			accessToken: "accessToke"
		});
		expect(account.facebookAccounts.length).toBe(1);
	});

	it('should allow multiple twitter accounts', () => {
		account.twitterAccounts.push({
			accessToken: "accessToken",
			accessTokenSecret: "access token secret",
			name: "name",
			ownerId: "owner id",
			owner: "owner"
		});
		expect(account.twitterAccounts.length).toBe(1);
	});

	it('should allow multiple WordPress accounts', () => {
		account.wordPressAccounts.push({
			name: "accessToken",
			username: "access token secret",
			password: "name",
			url: "owner id"
		});
		expect(account.wordPressAccounts.length).toBe(1);
	});

	it('should allow multiple messages', () => {
		account.messages.push({
			name: "accessToken",
			description: "access token secret"
		});
		expect(account.messages.length).toBe(1);
	});

	it('should allow multiple keywords', () => {
		account.keywords.push({
			name: "accessToken"
		});
		expect(account.keywords.length).toBe(1);
	});

	it('should allow multiple destinations', () => {
		account.destinations.push({
			name: "accessToken",
			type: "accessToken"
		});
		expect(account.destinations.length).toBe(1);
	});

	it('should allow multiple assets', () => {
		account.assets.push({
			name: "accessToken",
			description: "accessToken"
		});
		expect(account.assets.length).toBe(1);
	});
});