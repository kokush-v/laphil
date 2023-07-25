import express from "express";
import { getEventTickets } from "./func";
const app = express();
const port = 8888;

app.get("/tickets", getEventTickets);

app.listen(port, () => {
	return console.log(`Express is listening at http://localhost:${port}`);
});
