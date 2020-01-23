const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');

chai.use(chaiHttp);
chai.should();

describe("People", () =>{
	describe("GET /", () => {
		it("should get all students records", done => {
			chai.request(app).get('/people/all').end((err, res) => {
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
});
