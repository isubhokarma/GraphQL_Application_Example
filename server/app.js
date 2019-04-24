const express = require("express");
const graphqlHTTP = require("express-graphql");

const app = express();

app.use("/graphql", graphqlHTTP({}));

app.listen(7777, () => {
	console.log("listening for request");
});
