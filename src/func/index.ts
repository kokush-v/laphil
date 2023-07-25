import { Request, Response } from "express";
import { getPrice, getSeats, getSections } from "../api";
import { Ticket } from "../types";

export const getEventTickets = async (req: Request, res: Response) => {
	const packageId = parseInt(req.query.package_id.toString(), 10);

	const result = await generateTicket(packageId);

	if (result === null) {
		res.status(404).send("Error");
	} else {
		res.send(result);
	}
};

const generateTicket = async (package_id: number): Promise<Ticket[]> => {
	const result: Ticket[] = [];
	const seats = await getSeats(package_id);
	const price = await getPrice(package_id);
	const sections = await getSections();

	seats.forEach(({ SeatRow, SectionId, SeatNumber, ZoneId }) => {
		const ticket: Ticket = {
			section: sections.get(SectionId),
			row: SeatRow,
			seatNumber: parseInt(SeatNumber, 10),
			price: price.get(ZoneId),
		};

		result.push(ticket);
	});

	return result.reverse();
};
