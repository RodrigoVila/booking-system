import { Document, Schema, model } from "mongoose";
import { TimeslotType } from "shared-types";

export type BookingSchemaType = TimeslotType & Document;

const timeslotSchema = new Schema({
  employeeId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Employee",
  },
  serviceType: {
    type: Schema.Types.ObjectId,
    ref: "Service",
  },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  isBooked: { type: Boolean, required: true, default: false },
});

const Timeslot = model<BookingSchemaType>("Timeslot", timeslotSchema);

export { Timeslot };
