import express from "express";
import {
  getBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
  cancelBooking,
  rescheduleBooking,
} from "../controllers/booking";

const router = express.Router();

router.route("/").get(getBookings).post(createBooking);

router
  .route("/:id")
  .get(getBookingById)
  .put(updateBooking)
  .delete(deleteBooking);

router.route("/:id/cancel").post(cancelBooking);

router.route("/:id/reschedule").put(rescheduleBooking);

export { router };
