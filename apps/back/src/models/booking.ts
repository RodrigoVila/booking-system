import { Document, Schema, model } from "mongoose";
import { BookingType } from "shared-types";

export type BookingSchemaType = BookingType & Document;

enum BookingTypeStatus {
  Pending = "pending",
  Confirmed = "confirmed",
  Cancelled = "cancelled",
}

const bookingSchema = new Schema(
  {
    client: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    employee: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    bookingStart: {
      type: String,
      required: true,
    },
    bookingEnd: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(BookingTypeStatus),
      default: BookingTypeStatus.Pending,
    },
    paidAmount: Number,
    notes: String,
  },
  { timestamps: true }
);

const Booking = model<BookingSchemaType>("Booking", bookingSchema);

export { Booking };
