require("dotenv").config();

import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
// import rateLimit from "express-rate-limit";

import { router as authRoutes } from "./routes/auth";
import { router as bookingRoutes } from "./routes/booking";
import { router as employeeRoutes } from "./routes/employee";
import { router as paymentRoutes } from "./routes/payment";
import { router as serviceRoutes } from "./routes/service";
import { router as timeslotRoutes } from "./routes/timeslot";
import { router as userRoutes } from "./routes/user";
import { UserType } from "shared-types";

export interface CustomRequest extends Request {
  user?: UserType;
}

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

// const verifyPrivilegedUser = (
//   req: CustomRequest,
//   _: Response,
//   next: NextFunction
// ) => {
//   if (req.user && (req.user.role === "admin" || req.user.role === "employee")) {
//     return next();
//   }
//   next("route");
// };

// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 min
//   max: 200, // Limits to 200 request per every 15 min
// });

// Mongo DB Connection
(async function connectToDB() {
  if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI is not defined in the environment variables");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to Atlas");
  } catch (err) {
    console.error("Error connecting to Atlas", err);
    process.exit(1);
  }
})();

// // If user is not admin, then a request limiter is applied
// app.use("/api", verifyPrivilegedUser, limiter);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/timeslot", timeslotRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
