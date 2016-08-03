'use strict';
const mongoose = require('mongoose'),
      Schema   = mongoose.Schema,
      Types    = mongoose.Schema.Types;

const WordPressFields = new Schema({
	excerpt: Types.String,
	status: Types.String,
	format: Types.String
});

const TwitterFields = new Schema({
	status: Types.String,
	useTitle: {
		type: Types.Boolean, default: true
	}
});

const FacebookFields = new Schema({
	post: Types.string,
	useBody: {type: Types.Boolean, default: true}
});

const TransmissionReport = new Schema({
	channel: Types.ObjectId,
	destination: Types.ObjectId,
	timeStart: Types.Date,
	timeEnd: Types.Date,
	status: Types.String,
	error: Types.String,
	destinationId: Types.String
});

const Content = new Schema({
	body: Types.String,
	channel: Types.ObjectId,
	createDate: Types.Date,
	facebook: FacebookFields,
	owner: Types.ObjectId,
	publishDate: Types.Date,
	slug: Types.String,
	title: Types.String,
	transmissionReports: [TransmissionReport],
	twitter: TwitterFields,
	wordpress: WordPressFields
});

Content.methods.failedTransmissionReportsFor = (channelId) => this.transmissionReports.filter((report) => report.channel === channelId && report.status === 'failure');

module.exports = mongoose.model('Content', Content);