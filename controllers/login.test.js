const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");
const { User } = require("../models/user");
const { DB_HOST_TEST, PORT } = process.env;

describe("test register router", () => {
  let server = null;
  beforeAll(async () => {
    server = app.listen(3004);
    await mongoose.connect(DB_HOST_TEST);
  });
  afterAll(async () => {
    server.close();
    await mongoose.connection.close();
  });

  test("response should have status code 200", async () => {
    const loginData = {
      email: "test@test-mail.com",
      password: "testpassword",
    };

    const { statusCode } = await request(app)
      .post("/api/users/login")
      .send(loginData);

    expect(statusCode).toBe(200);
  });
  test("the response should return a token", async () => {
    const loginData = {
      email: "test@test-mail.com",
      password: "testpassword",
    };

    const { body } = await request(app)
      .post("/api/users/login")
      .send(loginData);
    expect(body.token).not.toBeUndefined();

    const user = await User.findOne({ email: loginData.email });
    expect(user.token).toBe(body.token);
  });
  test("the response should return a user object with 2 fields email and subscription, having the data type String", async () => {
    const loginData = {
      email: "test@test-mail.com",
      password: "testpassword",
    };

    const { body } = await request(app)
      .post("/api/users/login")
      .send(loginData);
    expect(typeof body.user.email).toBe("string");
    expect(typeof body.user.subscription).toBe("string");
  });
});
