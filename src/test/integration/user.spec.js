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

  it('FIND USER BY ID AND EXPECT STATUS CODE 200 AND CORRECT USER', async () => {

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

  it('Delete user', async () => {

    const user = await Usuario.create({
      nome: 'Obiwan',
      email: 'obiwan@obiwan.com',
      senha: '123456',
      role: 'JEDI'
    })

    const res = await request(App)
      .delete(`/api/users/${user.id}`);

    expect(res.statusCode).to.equal(200);
  });

  it('Delete user wrong', async () => {

    const userId = uuid.v4();

    const res = await request(App)
      .delete(`/api/users/${userId}`);

    expect(res.statusCode).to.equal(400);
  });

  it('Update user', async () => {

    const userCreate = await Usuario.create({
      nome: 'Anakin',
      email: 'anakin@anakin.com',
      senha: '123456',
      role: 'PADAWAN'
    })

    const userEdit = {
      nome: 'Anakin editado',
      email: 'anakin@anakin.com editado',
      senha: '123456 editado',
      role: 'PADAWAN editado'
    }

    const res = await request(App)
      .put(`/api/users/${userCreate.id}`)
      .send(userEdit);

    const user = await Usuario.findByPk(userCreate.id);

    expect(res.statusCode).to.equal(200);
    expect(user.nome).to.equal(userEdit.nome);
    expect(user.email).to.equal(userEdit.email);
    expect(user.senha).to.equal(userEdit.senha);
    expect(user.role).to.equal(userEdit.role);
  });

  it('Update user wrong', async () => {

    const userId = uuid.v4();

    const res = await request(App)
      .put(`/api/users/${userId}`);

    expect(res.statusCode).to.equal(400);
  });


  after(async () => {
    await Usuario.destroy({ where: {} });
  });

});