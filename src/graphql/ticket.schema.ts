import { buildSchema } from "graphql";
import ticketService from "../services/ticket.service";
import { Ticket } from "../types";

export const schema = buildSchema(`
    type Ticket {
        section: String!
        row: String!
        seatNumber: Int!
        price: Int!
    }

    type Query {
        getEventTickets(package_id: String): [Ticket]
    }
`);

export const root = {
	getEventTickets: async ({ package_id }: { package_id: string }): Promise<Ticket[]> => {
		const tickets = await ticketService.generateTicket(package_id);
		return tickets;
	},
};
