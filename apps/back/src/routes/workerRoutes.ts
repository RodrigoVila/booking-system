import express from "express";
import {
  getWorkers,
  getWorkerById,
  createWorker,
  updateWorker,
  deleteWorker,
} from "../controllers/workerController";

const router = express.Router();

router.route("/").get(getWorkers).post(createWorker);

router.route("/:id").get(getWorkerById).put(updateWorker).delete(deleteWorker);

export { router };
