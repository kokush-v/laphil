import express from "express";
import ticketRouter from "./tickets.route";
import { graphqlHTTP } from "express-graphql";
import { root, schema } from "../graphql/ticket.schema";
const router = express();

router.use("/tickets", ticketRouter);
router.use(
	"/graphql",
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true,
	})
);

export default router;
