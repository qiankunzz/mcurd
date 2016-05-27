'use strict';

var app = require('../..');
import request from 'supertest';

var newUnit;

describe('Unit API:', function() {

  describe('GET /api/units', function() {
    var units;

    beforeEach(function(done) {
      request(app)
        .get('/api/units')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          units = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      units.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/units', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/units')
        .send({
          name: 'New Unit',
          info: 'This is the brand new unit!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newUnit = res.body;
          done();
        });
    });

    it('should respond with the newly created unit', function() {
      newUnit.name.should.equal('New Unit');
      newUnit.info.should.equal('This is the brand new unit!!!');
    });

  });

  describe('GET /api/units/:id', function() {
    var unit;

    beforeEach(function(done) {
      request(app)
        .get('/api/units/' + newUnit._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          unit = res.body;
          done();
        });
    });

    afterEach(function() {
      unit = {};
    });

    it('should respond with the requested unit', function() {
      unit.name.should.equal('New Unit');
      unit.info.should.equal('This is the brand new unit!!!');
    });

  });

  describe('PUT /api/units/:id', function() {
    var updatedUnit;

    beforeEach(function(done) {
      request(app)
        .put('/api/units/' + newUnit._id)
        .send({
          name: 'Updated Unit',
          info: 'This is the updated unit!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedUnit = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedUnit = {};
    });

    it('should respond with the updated unit', function() {
      updatedUnit.name.should.equal('Updated Unit');
      updatedUnit.info.should.equal('This is the updated unit!!!');
    });

  });

  describe('DELETE /api/units/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/units/' + newUnit._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when unit does not exist', function(done) {
      request(app)
        .delete('/api/units/' + newUnit._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
