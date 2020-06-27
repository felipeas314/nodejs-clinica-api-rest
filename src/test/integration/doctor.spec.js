const request = require('supertest');
const { App } = require('../../server');
let chai = require('chai');

let expect = chai.expect;

describe(' DOCTOR INTEGRATION TEST ', () => {



  it(' CREATE DOCTOR ', async () => {
    const res = await request(App)
      .post('/api/doctors')
      .send({
        email: 'gugu@gugu.com',
        nome: 'Gustavo'
      });

    expect(res.statusCode).to.equal(201);
  });

  it(' LIST DOCTOR ', async () => {
    const res = await request(App)
      .get('/api/doctors');

    expect(res.statusCode).to.equal(200);
  });

})