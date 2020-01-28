const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');
console.log();
chai.use(chaiHttp);
chai.should();
describe("People", () =>{
	describe("GET /", () => {
		it("should get all students records", done => {
			chai.request(app).get('/people').end((err, res) => {
        res.should.have.status(200);

				res.body.should.be.a('object');
				done();
			});
		});
		it("should get a person record", done => {
			const id = 1;
			chai.request(app).get(`/people/${id}`).end((err, res) => {
        res.should.have.status(200);
				res.body.should.be.a('object');
				done();
			});
		});
		it("should not get a person record", done => {
			const id = 5;
			chai.request(app).get(`/people/${id}`).end((err, res) => {
				res.should.have.status(404);
				done();
			});
		});
	});
	describe("POST /", () => {
		it("should post a person", done => {
			chai.request(app).post('/people').send({ name:'a', age:2 })
			.end((err, res) => {
				res.should.have.status(201);
				res.body.should.be.a('object');
				done();
			});
		});
		it("should not post a person", done => {
			chai.request(app).post('/people').send({ name:"" })
			.end((err, res) => {
				res.should.have.status(400);
				done();
			});
    });
    it("should not post a person", done =>{
      chai.request(app).post('/people').send({ age:"" })
      .end((err, res) =>{
        res.should.have.status(400);
        done();
      });
    });
	});
	describe("PUT /", () => {
		it("should update a person", done => {
			const id = 1;
			chai.request(app).put(`/people/${id}`).end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				done();
			});
		});
		it("should not update a person", done => {
			const id = 333;
			chai.request(app).put(`/people/${id}`).end((err, res) => {
				res.should.have.status(404);
				done();
			});
		});
	});
	describe("DELETE /", () => {
		it("should delete a person", done => {
			const id = 3;
			chai.request(app).delete(`/people/${id}`).end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				done();
			});
		});
		it("should not delete a person", done => {
			const id = 333;
			chai.request(app).delete(`/people/${id}`).end((err, res) => {
				res.should.have.status(404);
				done();
			});
		});
	});
});
