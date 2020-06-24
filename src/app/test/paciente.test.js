let chai = require('chai');
let {App} = require('../express');
let request = require('supertest')(App);
let expect = chai.expect;

const {Paciente} = require('../app/model/paciente-model');

describe("########## PACIENTE ##########", done => {

    it('lista pacientes e recebe status 200', done => {
        request.get('/pacientes')
            .end( (err,res) => {
                expect(res.statusCode).to.equal(200);
                done();
            });
    });
});