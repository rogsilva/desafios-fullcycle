const superTest = require('supertest');

const app = require('./app');
const request = superTest(app);

describe('Test the root path', () => {
  test('it should response the GET method', (done) => {
    request.get('/')
      .expect(response => {
        expect(response.status).toBe(200)
        expect(response.text).toBe('Hello Full Cycle!');
      })
      .end(done);
  });
});
