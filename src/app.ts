require("dotenv").config();
import express from "express";
import router from "./routes";

const app = express();
const port = process.env.PORT || 3000;

app.use("/", router);

app.listen(port, () => {
	return console.log(`Express is listening at http://localhost:${port}\nRunning a GraphQL API server at http://localhost:${port}/graphql`);
});
