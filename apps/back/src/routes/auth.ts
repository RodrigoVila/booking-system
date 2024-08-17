import express from "express";
import {
  signUp,
  signIn,
  googleLogin,
  emailValidation,
  passwordRecoveryAPI,
  passwordTokenValidation,
  updatePassword,
} from "../controllers/auth";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/google-login", googleLogin);
router.get("/verify-email", emailValidation);
router.post("/password-recovery", passwordRecoveryAPI);
router.post("/password-token-validation", passwordTokenValidation);
router.put("/update-password", updatePassword);

export { router };
