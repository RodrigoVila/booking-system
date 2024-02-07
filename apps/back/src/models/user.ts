import { Document, Schema, model } from "mongoose";
import { UserType } from "shared-types";

export type UserSchemaType = UserType & Document;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      sparse: true, // This allows for null values to be unique as well
    },
    password: String,
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    bookings: [
      {
        type: Schema.Types.ObjectId,
        ref: "Booking",
      },
    ],
  },
  { timestamps: true }
);

const User = model<UserSchemaType>("User", userSchema);

export { User };
