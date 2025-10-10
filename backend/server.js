import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

// App config
const app = express();
const port = 4000;

// Middleware
app.use(cors());

// Use JSON parser only for non-file requests
app.use(express.json());

// Make uploaded images accessible
app.use("/images", express.static("uploads"));

// DB connection
connectDB();

// API endpoints
app.use("/api/food", foodRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
