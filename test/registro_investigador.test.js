const request = require('supertest');
const app = require('../app');

describe("Endpoint para investigadores", () => {
    it("GET ALL investigadores", done => {
        request(app)
            .get('/investigador')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });

    it('Devuelve un mensaje de error', done => {
        request(app).get('/investigador/noexistis')
        .set('Accept', 'application/json')
        .expect(404)
        .end(err => {
          if (err) return done(err);
          done();
        })
    })
});