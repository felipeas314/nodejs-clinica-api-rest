const request = require('supertest');
const { App } = require('../../server');
let chai = require('chai');
const { Medico } = require('../../app/model/medico-model');
let expect = chai.expect;

describe('DOCTOR INTEGRATION TEST ', () => {

  before(async () => {
    await Medico.destroy({ where: {} });
  });

  it('CREATES A DOCTOR WITH CORRECT DATA AND RECEIVES STATUS CODE 200', async () => {
    const res = await request(App)
      .post('/api/doctors')
      .send({
        email: 'gugu@gugu.com',
        nome: 'Gustavo'
      });

    expect(res.statusCode).to.equal(201);
  });

  it('LIST ALL DOCTOR AND RECEIVES STATUS CODE 200', async () => {
    const res = await request(App)
      .get('/api/doctors');

    expect(res.statusCode).to.equal(200);
  });

  after(async () => {
    await Medico.destroy({ where: {} });
  });

});