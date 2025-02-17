import request from "supertest";
import { app } from "../app";

describe("Schedule Routes", () => {
    let token: string;
    let scheduleId: string;

    beforeAll(async () => {
        const loginResponse = await request(app).post("/session").send({
          email: "login@example.com",
          password: "password",
        });
    
        token = loginResponse.body.token;
      });
});