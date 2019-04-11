const request = require('supertest');
const server = require('./server.js');

//testing endpoints
//returns correct http status code

describe('server.js', () => {
    describe('GET /', () => {
        test('should respond with 200', () => {
            return request(server)
                .get('/')
                .then(response => {
                    expect(response.status).toBe(200);
                });
        });

        test('should work', () => {
            return request(server)
                .get('/')
                .expect(200);
        });

        //note that this test is on an asyncronous function so the return is necessary
        test('should return JSON', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.type).toBe('application/json');
                });
        });

        test('should check for json', () => {
            return request(server)
            .get('/')
            .expect('Content-Type', /json/);
        })

        test('should return { api: "up" }', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.body).toEqual({ api: 'up' });
                });
        });
    });
});