const request = require('supertest');
const { App } = require('../../server');

describe('##### DOCTOR INTEGRATION TEST #####', () => {

  afterAll(() => {
    server.close();
  });

  it('----- CREATE DOCTOR -----', async done => {
    const res = await request(App)
      .post('/api/doctors')
      .send({
        email:'gugu@gugu.com',
        nome:'Gustavo'
      });
    
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('content');
      expect(res.body).toHaveProperty('status')
      done();
  });

  it('----- LIST DOCTOR -----', async done => {
    const res = await request(App)
      .get('/api/doctors');
    
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('content');
      expect(res.body).toHaveProperty('status')
      done();
  });

})