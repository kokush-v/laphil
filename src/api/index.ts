import axios from "axios";
import { Price, Seat, Section } from "../types";

export const getSections = async (): Promise<Map<number, string>> => {
	const url = "https://my.laphil.com/en/rest-proxy/ReferenceData/Sections";

	const result = new Map<number, string>();

	await axios
		.get(url)
		.then((res) => {
			const data: Section[] = res.data;
			data.forEach(({ Id, Description }) => {
				result.set(Id, Description);
			});
		})
		.catch(function (error) {
			console.log(error);
		})
		.finally();

	return result;
};

export const getSeats = async (package_id: number): Promise<Seat[]> => {
	const url = `https://my.laphil.com/en/rest-proxy/TXN/Packages/${package_id}/Seats?constituentId=0&modeOfSaleId=26&packageId=${package_id}`;
	const result: Seat[] = [];

	await axios
		.get(url)
		.then((res) => {
			const seats: Seat[] = res.data;
			seats.forEach((seat) => {
				if (seat.SeatStatusId != 0) return;
				result.push(seat);
			});
		})
		.catch((err) => {
			console.log(err);
		})
		.finally();

	return result;
};

export const getPrice = async (package_id: number): Promise<Map<number, number>> => {
	const url = `https://my.laphil.com/en/rest-proxy/TXN/Packages/${package_id}/Prices?modeOfSaleId=26`;

	const result = new Map<number, number>();

	await axios
		.get(url)
		.then((res) => {
			const data: Price[] = res.data;

			data.forEach(({ ZoneId, Price, PerformanceId }) => {
				if (PerformanceId != 0) return;
				result.set(ZoneId, Price);
			});
		})
		.catch((err) => {
			console.log(err);
		})
		.finally();

	return result;
};
