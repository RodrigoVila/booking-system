import { Document, Schema, model } from "mongoose";
import { BookingType } from "shared-types";

export type BookingSchemaType = BookingType & Document;

const bookingSchema = new Schema(
  {
    clientName: {
      type: String,
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
      type: Date,
      required: true,
    },
    duration: {
      type: Number, // Consider specifying in minutes
      required: true,
    },
    paidAmount: Number,
    notes: String,
  },
  { timestamps: true }
);

const Booking = model<BookingSchemaType>("Booking", bookingSchema);

export { Booking };
