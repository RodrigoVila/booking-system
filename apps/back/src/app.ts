import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { router as bookingRoutes } from "./routes/bookingRoutes";
import { router as servicesRoutes } from "./routes/servicesRoutes";
import { router as timeslotRoutes } from "./routes/timeslotRoutes";
import { router as userRoutes } from "./routes/userRoutes";
import { router as employeeRoutes } from "./routes/employeeRoutes";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

// Mongo DB Connection
(async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Connected to Atlas");
  } catch (err) {
    console.error("Error connecting to Atlas", err);
  }
})();

// Routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/timeslot", timeslotRoutes);
app.use("/api/users", userRoutes);
app.use("/api/employees", employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
