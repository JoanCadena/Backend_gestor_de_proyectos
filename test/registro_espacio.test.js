const request = require('supertest');
const app = require('../app');

describe("Endpoint para registrar espacios", () => {
    it("GET ALL workspaces", done => {
        request(app)
            .get('/workspace')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });

    it('Devuelve un mensaje de error', done => {
        request(app).get('/workspace/noexistis')
        .set('Accept', 'application/json')
        .expect(404)
        .end(err => {
          if (err) return done(err);
          done();
        })
    })
});