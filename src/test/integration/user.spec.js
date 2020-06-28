const uuid = require('uuid');
const request = require('supertest');
const { App } = require('../../server');
const chai = require('chai');
const { Usuario } = require('../../app/model/usuario-model');

let expect = chai.expect;

describe('USER INTEGRATION TEST', () => {

  before(async () => {
    await Usuario.destroy({ where: {} });
  });

  it('CREATES USER WITH CORRECT DATA AND RECEIVES STATUS CODE 200', async () => {
    const res = await request(App)
      .post('/api/users')
      .send({
        nome: 'Felipe',
        email: 'felipe@felip2e.com',
        senha: '123456',
        role: 'JEDI',
      });

    expect(res.statusCode).to.equal(201);
  });

  it('CREATES USER WITH EMAIL THAT ALREADY EXISTS AND RECEIVES STATUS CODE 400', async () => {

    await Usuario.create({
      nome: 'Ric',
      email: 'ric@ric.com',
      senha: '123456',
      role: 'PADAWAN'
    });

    const res = await request(App)
      .post('/api/users')
      .send({
        nome: 'Felipe',
        email: 'ric@ric.com',
        senha: '123456',
        role: 'JEDI',
      });

    expect(res.statusCode).to.equal(400);
  });

  it('LIST ALL USERS AND RECEIVES STATUS CODE 200', async () => {
    const res = await request(App)
      .get('/api/users');

    expect(res.statusCode).to.equal(200);
  });

  it('FIND USER BY ID AND EXPECT STATUS CODD 200 AND CORRECT USET', async () => {

    const user = await Usuario.create({
      nome: 'Olivia',
      email: 'olivia@olivia.com',
      senha: '123456',
      role: 'JEDI'
    });

    const res = await request(App)
      .get(`/api/users/${user.id}`);

    const userReturn = res.body.content;

    expect(res.statusCode).to.equal(200);
    expect(userReturn.nome).to.equal(user.nome);
    expect(userReturn.email).to.equal(user.email);
  });

  it('SEARCH USER FOR WRONG ID AND RECEIVE STATUS CODE 400', async () => {

    const userId = uuid.v4();

    console.log(userId);

    const res = await request(App)
      .get(`/api/users/${userId}`);

    expect(res.statusCode).to.equal(400);
  });

  after(async () => {
    await Usuario.destroy({ where: {} });
  });

});