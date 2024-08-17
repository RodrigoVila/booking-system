import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

import { User } from "../models/user";
import { PasswordRecovery } from "../models/auth";
import { sendEmail } from "../utils/nodemailer";
import { encryptPassword, compareHashedPassword } from "../utils/encrypt";
import {
  passwordRecoveryToHTML,
  emailVerificationToHTML,
} from "../utils/htmlEmailParsers";

const createToken = (userId: string, expiresIn: string = "1h") => {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn });
};

export const signUp = async (req: Request, res: Response) => {
  const { name, lastName, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message:
          "This email is already registered. Please use another email or log in.",
      });
    }

    const hashedPassword = await encryptPassword(password);
    const newUser = await User.create({
      name,
      lastName,
      email,
      password: hashedPassword,
    });

    const verificationToken = createToken(newUser._id, "1h");

    const baseURL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5000"
        : "https://vercel.app";

    const verificationLink = `${baseURL}/verify-email?token=${verificationToken}`;

    const mailOption = {
      from: `Massage Studio Noord <${process.env.NODEMAILER_USER}>`,
      to: email,
      subject: "New Account at Massage Studio Noord",
      html: emailVerificationToHTML(name, verificationLink),
    };

    await sendEmail(mailOption);

    res.status(201).json({ email: newUser.email, name: newUser.name });
  } catch (err) {
    console.error("Error during sign-up:", err);
    res.status(500).json({
      message: "An error occurred during sign-up. Please try again later.",
    });
  }
};

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found. Please check your credentials or sign up.",
      });
    }

    if (user.googleAccount && !user.password) {
      return res.status(409).json({
        message:
          "This email is registered with Google. Please use Google login.",
      });
    }

    if (user.confirmed) {
      return res.status(401).json({
        message:
          "Your account is not validated. Please check your email for validation instructions.",
      });
    }

    if (user.password) {
      const isPasswordCorrect = await compareHashedPassword(
        password,
        user.password
      );

      if (!isPasswordCorrect) {
        return res
          .status(401)
          .json({ message: "Incorrect password. Please try again." });
      }
    }

    const token = createToken(user._id, "90d");

    res.status(200).json({ name: user.name, email: user.email, token });
  } catch (err) {
    console.error("Error during sign-in:", err);

    res.status(500).json({
      message: "An error occurred during sign-in. Please try again later.",
    });
  }
};

export const googleLogin = async (req: Request, res: Response) => {
  const { email, name, lastName } = req.body;

  try {
    let user = await User.findOne({ email });
    const token = createToken(user?._id || "");

    if (user) {
      await User.findByIdAndUpdate(user._id, { token });
    } else {
      user = await User.create({
        name,
        lastName,
        email,
        token,
        googleAccount: true,
        confirmed: true,
      });
    }

    res.status(200).json({ email: user.email, token, name: user.name });
  } catch (err) {
    console.error("Error during Google login:", err);
    res.status(500).json({
      message:
        "Unable to log in with Google. Please try again or contact support.",
    });
  }
};

export const emailValidation = async (req: Request, res: Response) => {
  const { token } = req.query;

  try {
    const decoded = jwt.verify(token as string, process.env.JWT_SECRET!) as {
      userId: string;
    };
    const user = await User.findByIdAndUpdate(
      decoded.userId,
      { confirmed: true },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({
        message:
          "User not found. Please check the confirmation link or contact support.",
      });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error("Error during email validation:", err);
    res
      .status(400)
      .json({ message: "Invalid or expired token. Please try again." });
  }
};

export const passwordRecoveryAPI = async (req: Request, res: Response) => {
  const { email } = req.body;
  const token = uuidv4();

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found. Please check the email address or sign up.",
      });
    }

    await PasswordRecovery.create({ email, token, created: new Date() });

    const mailOption = {
      from: `Your App <${process.env.NODEMAILER_USER}>`,
      to: email,
      subject: "Password Recovery",
      html: passwordRecoveryToHTML(email, token),
    };

    await sendEmail(mailOption);
    res.status(200).json({
      message: "Password recovery email sent. Please check your inbox.",
    });
  } catch (err) {
    console.error("Error during password recovery initiation:", err);
    res.status(500).json({
      message:
        "An error occurred while initiating password recovery. Please try again later.",
    });
  }
};

export const passwordTokenValidation = async (req: Request, res: Response) => {
  const { email, token } = req.body;

  try {
    const record = await PasswordRecovery.findOne({ email });
    if (!record || record.token !== token) {
      return res.status(404).json({
        message:
          "Invalid token or email. Please request a new password recovery link.",
      });
    }

    res.status(200).json({
      message: "Token is valid. You may proceed to reset your password.",
    });
  } catch (err) {
    console.error("Error during password token validation:", err);
    res.status(500).json({
      message:
        "An error occurred while validating the token. Please try again later.",
    });
  }
};

export const updatePassword = async (req: Request, res: Response) => {
  const { email, oldPassword, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found. Please check your email and try again.",
      });
    }

    if (user.googleAccount) {
      return res.status(409).json({
        message:
          "This email is registered with Google. Please use Google login.",
      });
    }

    if (oldPassword && user.password) {
      const isPasswordCorrect = await compareHashedPassword(
        oldPassword,
        user.password
      );
      if (!isPasswordCorrect) {
        return res
          .status(401)
          .json({ message: "Old password is incorrect. Please try again." });
      }
    }

    const hashedPassword = await encryptPassword(newPassword);
    await User.findByIdAndUpdate(user._id, { password: hashedPassword });

    if (!oldPassword) {
      await PasswordRecovery.findOneAndDelete({ email });
    }

    res.status(200).json({ message: "Password updated successfully." });
  } catch (err) {
    console.error("Error during password update:", err);
    res.status(500).json({
      message:
        "An error occurred while updating the password. Please try again later.",
    });
  }
};
