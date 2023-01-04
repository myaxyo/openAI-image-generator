const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(cors());

//enable body parser

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;
app.use("/openai", require("./routes/openaiRoutes.js"));

app.listen(port, () => console.log("Server is running on PORT " + port));
