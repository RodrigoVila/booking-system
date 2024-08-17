import { Request, Response } from "express";

import { UserSchema, UserType } from "shared-types";

import { User } from "../models/user";

type NullableUserType = UserType | null;

const getUsers = async (_: Request, res: Response) => {
  try {
    const users: UserType[] = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (err) {
    res.status(500).json({ success: false, message: (err as Error).message });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const user: NullableUserType = await User.findById(req.params.id);
    if (user) {
      res.status(200).json({ success: true, data: user });
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: (err as Error).message });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const parsedData = UserSchema.parse(req.body);
    const user = new User(parsedData);
    const newUser: UserType = await user.save();

    res.status(201).json({ success: true, data: newUser });
  } catch (err) {
    res.status(400).json({ success: false, message: (err as Error).message });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const updateUser: NullableUserType = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (updateUser) {
      res.status(200).json({ success: true, data: updateUser });
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: (err as Error).message });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser: NullableUserType = await User.findByIdAndDelete(
      req.params.id
    );
    if (deletedUser) {
      res.status(200).json({ success: true, data: deletedUser });
    } else {
      res.status(404).json({ message: "Booking not found" });
    }
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

export { getUsers, getUserById, createUser, updateUser, deleteUser };
