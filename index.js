const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.SERVER_PORT || 3500;
// const mongoose = require("mongoose");

app.use(express.json());
app.use("/api", require("./api/users/router"));
app.use("/api", require("./api/products/router"));

// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.log("Something wrong"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
