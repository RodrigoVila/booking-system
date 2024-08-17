import express from "express";
import {
  getPayments,
  getPaymentById,
  createPayment,
  updatePayment,
  deletePayment,
} from "../controllers/payment";

const router = express.Router();

router.route("/").get(getPayments).post(createPayment);

router
  .route("/:id")
  .get(getPaymentById)
  .put(updatePayment)
  .delete(deletePayment);

export { router };
