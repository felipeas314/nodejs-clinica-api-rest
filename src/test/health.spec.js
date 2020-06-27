const request = require('supertest')
const { App } = require('../server');
let chai = require('chai');

let expect = chai.expect;

describe(' HEALTH ', async () => {

  it(' HEALTH ', async () => {
    const res = await request(App).get('/api/health');
    expect(res.statusCode).to.equal(200);
  })
})