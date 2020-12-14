const uuid = require('uuid');
const request = require('supertest');
const { App } = require('../../server');
const chai = require('chai');
const { Paciente } = require('../../app/model/paciente-model');

let expect = chai.expect;

describe('Teste de integração de cliente', () => {

  before(async () => {
    
  });

  it('Lista pacientes e espera um array 2 status 200', async() => {
    const res = await request(App)
      .get('/api/v1/pacientes');

      expect(res.statusCode).to.equal(200);
  });
});
