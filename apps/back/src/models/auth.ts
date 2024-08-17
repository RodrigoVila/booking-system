import { Schema, model, Document } from "mongoose";
import { PasswordRecoveryType } from "shared-types";

export type PasswordRecovery = PasswordRecoveryType & Document;

const passwordRecoverySchema = new Schema<PasswordRecovery>({
  email: { type: String, required: true },
  token: { type: String, required: true },
  created: { type: Date, default: Date.now, expires: 3600 }, // Token expires in 1 hour
});

const PasswordRecovery = model<PasswordRecovery>(
  "PasswordRecovery",
  passwordRecoverySchema
);

export { PasswordRecovery };
