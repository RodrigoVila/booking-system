import mongoose, { Document } from "mongoose";
import { EmployeeType } from "shared-types";

export type EmployeeSchemaType = EmployeeType & Document;

// Define the schema
const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  weeklyAvailability: {
    monday: { start: String, end: String },
    tuesday: { start: String, end: String },
    wednesday: { start: String, end: String },
    thursday: { start: String, end: String },
    friday: { start: String, end: String },
    saturday: { start: String, end: String },
    sunday: { start: String, end: String },
  },
});
const Employee = mongoose.model<EmployeeSchemaType>("Employee", employeeSchema);

export { Employee };
