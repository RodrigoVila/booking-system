import mongoose, { Document } from "mongoose";
import { EmployeeType } from "shared-types";

export type EmployeeSchemaType = EmployeeType & Document;

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  imgUrl: { type: String },
  weeklyAvailability: [
    {
      day: { type: String, required: true },
      start: { type: String, required: true },
      end: { type: String, required: true },
    },
  ],
});

const Employee = mongoose.model<EmployeeSchemaType>("Employee", employeeSchema);

export { Employee };
