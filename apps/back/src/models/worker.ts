import mongoose, { Document } from "mongoose";
import { WorkerType } from "shared-types";

export type WorkerSchemaType = WorkerType & Document;

// Define the schema
const workerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  servicesOffered: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
    },
  ],
  weeklyAvailability: {
    monday: [{ start: String, end: String }],
    tuesday: [{ start: String, end: String }],
    wednesday: [{ start: String, end: String }],
    thursday: [{ start: String, end: String }],
    friday: [{ start: String, end: String }],
    saturday: [{ start: String, end: String }],
    sunday: [{ start: String, end: String }],
  },
});
const Worker = mongoose.model<WorkerSchemaType>("Worker", workerSchema);

export { Worker };
