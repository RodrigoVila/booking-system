import mongoose, { Document, Schema } from "mongoose";
import { PaymentMethod, PaymentStatus } from "shared-constants";
import { PaymentType } from "shared-types";

export type PaymentchemaType = PaymentType & Document;

// Define the schema
const paymentSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  orderId: { type: Schema.Types.ObjectId, ref: "Order", required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true, default: "USD" },
  status: {
    type: String,
    enum: [
      PaymentStatus.Completed,
      PaymentStatus.Failed,
      PaymentStatus.Pending,
      PaymentStatus.Refunded,
    ],
    required: true,
    default: PaymentStatus.Pending,
  },
  paymentMethod: {
    type: String,
    enum: [
      PaymentMethod.CreditCard,
      PaymentMethod.Stripe,
      PaymentMethod.Paypal,
      PaymentMethod.Other,
    ],
    required: true,
  },
  transactionId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Employee = mongoose.model<PaymentchemaType>("Payment", paymentSchema);

export { Employee };
