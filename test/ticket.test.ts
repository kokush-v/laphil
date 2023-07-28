import request from "supertest";
import app from "../src/app";
import { expect } from "chai";
import { Ticket } from "../src/types";

class ApiTest {
	packageId: string;

	constructor(packageId: string) {
		this.packageId = packageId;
	}

	ticketTest() {
		describe("Test /tickets endpoint", () => {
			it("should respond with array of avaible tickets", async () => {
				const response = await request(app).get("/tickets").query({ package_id: this.packageId });

				expect(response.status).to.equal(200);
				expect(response.body).to.be.an("array");
				response.body.forEach((ticket: any) => {
					expect(ticket).to.be.an("object");
				});
			}).timeout(5000);
		});
	}
}

new ApiTest("1196").ticketTest();
