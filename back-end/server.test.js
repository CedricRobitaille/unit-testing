const request = require('supertest');
const {app, server} = require("./server")

describe("Test the root path", () => {
  test("It sshould respond with 'Hello World!'", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello World!")
    expect(response.statusCode).toBe(200);
  })
})

afterAll(done => {
  server.close()
  done();
});