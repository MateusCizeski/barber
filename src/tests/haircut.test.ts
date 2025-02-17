import request from "supertest";
import { app } from "../app";

describe("Haircut Routes", () => {
    let token: string;

    beforeAll(async () => {
        const loginResponse = await request(app).post("/session").send({
          email: "login@example.com",
          password: "password",
        });

        token = loginResponse.body.token;
    });
});