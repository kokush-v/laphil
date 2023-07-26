import axios from "axios";
require("dotenv").config();
import { Price, Seat, Section } from "../types";

class TicketsApi {
	private baseUrl: string = process.env.BASE_API_URL;

	async getSections(): Promise<Map<number, string>> {
		const url = `${this.baseUrl}/ReferenceData/Sections`;

		const result = new Map<number, string>();
		const resp = await axios.get(url);

		const data: Section[] = resp.data;

		data.forEach(({ Id, Description }) => {
			result.set(Id, Description);
		});

		return result;
	}

	async getSeats(package_id: string): Promise<Seat[]> {
		const url = `${this.baseUrl}/TXN/Packages/${package_id}/Seats?constituentId=0&modeOfSaleId=26&packageId=${package_id}`;

		const result: Seat[] = [];
		const resp = await axios.get(url);

		const data: Seat[] = resp.data;

		data.forEach((seat) => {
			if (seat.SeatStatusId != 0) return;
			result.push(seat);
		});

		return result;
	}

	async getPrice(package_id: string): Promise<Map<number, number>> {
		const url = `${this.baseUrl}/TXN/Packages/${package_id}/Prices?modeOfSaleId=26`;

		const result = new Map<number, number>();
		const resp = await axios.get(url);

		const data: Price[] = resp.data;

		data.forEach(({ ZoneId, Price, PerformanceId }) => {
			if (PerformanceId != 0) return;
			result.set(ZoneId, Price);
		});

		return result;
	}
}

export default new TicketsApi();
