const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const songRoutes = require("./src/api/v1/routes/songs");
const errorHandler = require("./src/middlewares/errorHandler");
const connectDB = require("./src/utils/config");
const cors = require("cors");

connectDB()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1/routes", songRoutes);

app.get("/", (req, res) => {
  res.send("TO access the API, go to /api/v1/routes");
});

app.use((req, res) => {
  res.status(404).json({ message: "API Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(errorHandler);
