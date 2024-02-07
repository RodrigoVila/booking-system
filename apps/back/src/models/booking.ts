import { Document, Schema, model } from "mongoose";
import { BookingType } from "shared-types";

export type BookingSchemaType = BookingType & Document;

const bookingSchema = new Schema(
  {
    clientName: {
      type: String,
      required: true,
    },
    serviceType: {
      type: String,
      required: true,
    },
    bookingDate: {
      type: String,
      required: true,
    },
    paidAmount: Number,
    notes: String,
  },
  { timestamps: true }
);

const Booking = model<BookingSchemaType>("Booking", bookingSchema);

export { Booking };
