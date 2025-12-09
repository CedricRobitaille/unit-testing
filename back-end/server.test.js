const request = require('supertest');
const {app, server} = require("./server")

describe("Test the root path", () => {
  test("It should respond with 'Hello World!'", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello World!")
    expect(response.statusCode).toBe(200);
  })
})



describe("Test the todo endpoints", () => {
  test("It should create a new todo", async () => {
    const response = await request(app)
      .post('/todos')
      .send({ todo: "Example Todo" })
    expect(response.body).toEqual({ todo: "Example Todo" })
    expect(response.statusCode).toBe(200);
  })

  test("It should update a todo", async () => {
    const response = await request(app)
      .put('/todos/1')
      .send({ todo: "Updated Todo" })
    expect(response.body).toEqual({ id: "1", todo: "Updated Todo" })
    expect(response.statusCode).toBe(200);
  })

  test("It should delete a todo", async () => {
    const response = await request(app).delete('/todos/1')
    expect(response.body).toEqual({ id: "1" })
    expect(response.statusCode).toBe(200)
  })


})

afterAll(done => {
  server.close()
  done();
});