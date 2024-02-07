import { Document, Schema, model } from "mongoose";
import { TimeslotType } from "shared-types";

export type BookingSchemaType = TimeslotType & Document;

const timeslotSchema = new Schema({
  workerId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Worker",
  },
  date: { type: Date, required: true },
  startTime: { type: String, required: true }, // Format "HH:MM"
  endTime: { type: String, required: true }, // Format "HH:MM"
  isBooked: { type: Boolean, required: true, default: false },
});

const Timeslot = model<BookingSchemaType>("Timeslot", timeslotSchema);

export { Timeslot };
