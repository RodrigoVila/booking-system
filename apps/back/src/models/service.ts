import { Document, Schema, model } from "mongoose";
import { BookingType } from "shared-types";

export type BookingSchemaType = BookingType & Document;

const serviceSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imgUrl: { type: String, required: true },
  options: [
    {
      duration: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  restPeriod: { type: Number, required: true },
  employees: [{ type: Schema.Types.ObjectId, ref: "Employee" }],
});

const Service = model<BookingSchemaType>("Service", serviceSchema);

export { Service };
