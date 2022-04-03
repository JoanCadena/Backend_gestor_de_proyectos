const request = require('supertest');
const app = require('../app');

describe("GET compromisos", () => {
    it("Debe retornar un JSON ", done => {
        request(app)
            .get('/compromiso')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
});