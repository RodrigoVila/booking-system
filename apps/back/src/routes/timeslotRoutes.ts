import express from "express";
import {
  getTimeslots,
  getTimeslotById,
  createTimeslot,
  updateTimeslot,
  deleteTimeslot,
} from "../controllers/timeslotController";

const router = express.Router();

router.route("/").get(getTimeslots).post(createTimeslot);

router
  .route("/:id")
  .get(getTimeslotById)
  .put(updateTimeslot)
  .delete(deleteTimeslot);

export { router };
