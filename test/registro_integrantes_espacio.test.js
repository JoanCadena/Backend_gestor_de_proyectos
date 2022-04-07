const request = require('supertest');
const app = require('../app');

describe("Endpoint para Integrantes de espacio", () => {
    it("GET ALL integrantes espacio", done => {
        request(app)
            .get('/integrante')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });

    it('Devuelve un mensaje de error', done => {
        request(app).get('/integrante/noexistis')
        .set('Accept', 'application/json')
        .expect(404)
        .end(err => {
          if (err) return done(err);
          done();
        })
    })
});