const request = require('supertest');
const app = require('../app');

describe("Endpoint para archivos", () => {
  it("GET ALL archivos", done => {
      request(app)
          .get('/archivo')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done)
  });

  it('Devuelve un mensaje de error', done => {
      request(app).get('/archivo/noexistis')
      .set('Accept', 'application/json')
      .expect(404)
      .end(err => {
        if (err) return done(err);
        done();
      })
  })
});