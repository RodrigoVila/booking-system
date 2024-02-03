import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bookingRoutes from "./routes/bookingRoutes";

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

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
