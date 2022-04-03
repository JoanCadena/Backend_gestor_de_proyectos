const request = require('supertest');
const app = require('../app');

describe("GET compromisos", () => {
    it("Debe retornar un JSON", async () => {
        await request(app).get('/compromiso')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200,function(err,res){
            if(err){
                console.log(err)
            }else{
                console.log(res.body)
            }
        })
    });
});