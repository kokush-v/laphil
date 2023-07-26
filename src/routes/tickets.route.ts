import express from "express";
import ticketController from "../controllers/ticket.controller";
const ticketRouter = express();

ticketRouter.get("/", ticketController.getEventTickets);

export default ticketRouter;
