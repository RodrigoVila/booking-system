import { Schema, model, Document } from "mongoose";
import { PasswordRecovery } from "shared-types";

export type PasswordRecoveryType = PasswordRecovery & Document;

const passwordRecoverySchema = new Schema<PasswordRecoveryType>({
  email: { type: String, required: true },
  token: { type: String, required: true },
  created: { type: Date, default: Date.now, expires: 3600 }, // Token expires in 1 hour
});

const PasswordRecovery = model<PasswordRecoveryType>(
  "PasswordRecovery",
  passwordRecoverySchema
);

export { PasswordRecovery };
