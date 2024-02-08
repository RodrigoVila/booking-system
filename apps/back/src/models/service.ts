import { Document, Schema, model } from "mongoose";
import { BookingType } from "shared-types";

export type BookingSchemaType = BookingType & Document;

const serviceSchema = new Schema({
  name: { type: String, required: true },
  duration: [{ type: Number, required: true }], // array of minutes
  availableWindows: [
    {
      start: { type: String, required: true }, // Format "HH:MM"
      end: { type: String, required: true }, // Format "HH:MM"
    },
  ],
  restPeriod: { type: Number, required: true }, // In minutes, time after each service before the next booking
});

const Service = model<BookingSchemaType>("Service", serviceSchema);

export { Service };
