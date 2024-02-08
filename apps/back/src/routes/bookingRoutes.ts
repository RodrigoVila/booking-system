import express from "express";
import {
  getBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
} from "../controllers/bookingController";

const router = express.Router();

router.route("/").get(getBookings).post(createBooking);

router
  .route("/:id")
  .get(getBookingById)
  .put(updateBooking)
  .delete(deleteBooking);

export { router };
