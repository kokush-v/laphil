import request from "supertest";
import app from "../src/app";
import { expect } from "chai";
import { Ticket } from "../src/types";

describe("Test /tickets endpoint", () => {
	const packageId = "1196";

	it("should respond with array of avaible tickets", async () => {
		const response = await request(app).get("/tickets").query({ package_id: packageId });

		expect(response.status).to.equal(200);
		expect(response.body).to.be.an("array");
		response.body.forEach((ticket: Ticket) => {
			expect(ticket).to.be.an("object");
		});
	}).timeout(10000);
});
