import express from "express";
import {
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
} from "../controllers/serviceController";

const router = express.Router();

router.route("/").get(getServices).post(createService);

router
  .route("/:id")
  .get(getServiceById)
  .put(updateService)
  .delete(deleteService);

export { router };
