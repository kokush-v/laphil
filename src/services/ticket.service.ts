import { Ticket } from "../types";
import ticketsApi from "../api/ticket.api";
class TicketService {
	async generateTicket(package_id: string): Promise<Ticket[]> {
		const result: Ticket[] = [];
		const seats = await ticketsApi.getSeats(package_id);
		const price = await ticketsApi.getPrice(package_id);
		const sections = await ticketsApi.getSections();

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
	}
}

export default new TicketService();
