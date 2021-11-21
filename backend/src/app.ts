import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";

const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

// Config .env to ./config/config.env
dotenv.config({ path: __dirname + "/config/config.env" });

const connectDB = require("./config/dbConnection");

const app: express.Application = express();

app.use(express.json());

app.use(cors());

app.use("/api", authRoutes);
app.use("/api/dashboard-data", dashboardRoutes);
app.use("/", (req: Request, res: Response) => {
  res.send("Hello to Memories API");
});

//  Connect to database
connectDB();

const PORT = 3500;

app.listen(PORT, () => console.log("server running on port", PORT));
