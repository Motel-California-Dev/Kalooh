import { When, Then } from 'cucumber';
import { expect } from 'chai';
import axios from 'axios';

import { getValidPayload } from './utils';
import { UserService } from '../../../src/services';

When(/^the user creates a (GET|POST|PATCH|PUT|DELETE) request to ([/\w-:/]+)$/, function (method, route) {
  const { PROTOCOL, HOST, PORT } = process.env;
  this.url = `${PROTOCOL}://${HOST}:${PORT}${route}`; 
  this.options = {
    method,
    url: this.url
  };
});

When(/^attaches a valid (.+) payload$/, function (payloadType) {
  this.data = getValidPayload(payloadType);
});

When(/^sends the request$/, async function () {
  this.options.data = this.data;
  try {
    this.response = await axios(this.options);
  } catch (e) {
    throw new Error(e);
  }
});

Then(/^our API should respond with a ([1-5]{1}\d\d) HTTP status code$/, function (statusCode) {
  expect(statusCode).to.equal(statusCode);
});

Then(/^the payload object should be added to the database$/, async function () {
  try {
    const response = await UserService.find({ username: this.response.data.username });
    
    const expectedData = Object.assign({ id: 1 }, this.options.data);
    delete expectedData.password
    
    expect(response).to.be.an('object').that.is.eql(expectedData);
  } catch (err) {
    throw new Error(err);
  }
});

Then(/^the user should be deleted from the database$/, async function () {
  const response = await UserService.delete(this.response.data.id);
  expect(response.message).to.be.a('string').that.is.equal('Successfully deleted user');

  const findDeletedUserResponse = await UserService.find({ username: this.response.data.username });
  expect(findDeletedUserResponse.message).to.be.a('string').that.is.equal('User not found');
});

