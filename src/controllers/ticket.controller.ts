import { Request, Response } from "express";
import ticketService from "../services/ticket.service";

class TicketController {
	async getEventTickets(req: Request, res: Response) {
		try {
			const packageId = req.query.package_id as string;
			const result = await ticketService.generateTicket(packageId);
			if (result === null) {
				res.status(404).send("Error");
			} else {
				res.send(result);
			}
		} catch (error) {
			console.log(error);
			res.status(400).send(error);
		}
	}
}

export default new TicketController();
