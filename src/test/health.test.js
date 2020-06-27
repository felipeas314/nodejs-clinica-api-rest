const request = require('supertest')
const { App } = require('../server');

describe('##### HEALTH #####', () => {

  afterAll(() => {
    server.close();
  });

  it('----- HEALTH -----', async done => {
    const res = await request(App).get('/api/health');
    expect(res.statusCode).toEqual(200);
    //expect(res.body).toHaveProperty('post')
    done();
  })
})