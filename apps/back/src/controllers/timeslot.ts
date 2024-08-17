import { Request, Response } from "express";
import { Timeslot } from "../models/timeslot";
import { TimeslotSchema, TimeslotType } from "shared-types"; // Ensure the correct import path

export const getTimeslots = async (req: Request, res: Response) => {
  try {
    const { startTime, endTime, employeeId } = req.query;
    const query: any = {
      date: {
        $gte: new Date(startTime as string),
        $lte: new Date(endTime as string),
      },
    };
    if (employeeId) {
      query.employeeId = employeeId;
    }
    const timeslots = await Timeslot.find(query);
    res.status(200).json({ success: true, data: timeslots });
  } catch (err) {
    res.status(500).json({ success: false, message: (err as Error).message });
  }
};

export const getTimeslotById = async (req: Request, res: Response) => {
  try {
    const timeslot = await Timeslot.findById(req.params.id);
    if (!timeslot) {
      res.status(404).json({ success: false, message: "Timeslot not found" });
    } else {
      res.status(200).json({ success: true, data: timeslot });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: (err as Error).message });
  }
};

export const createTimeslot = async (req: Request, res: Response) => {
  try {
    const parsedData = TimeslotSchema.parse(req.body); // Validate against Zod schema
    const newTimeslot = new Timeslot(parsedData);
    const savedTimeslot = await newTimeslot.save();
    res.status(201).json({ success: true, data: savedTimeslot });
  } catch (err) {
    res.status(400).json({ success: false, message: (err as Error).message });
  }
};

export const updateTimeslot = async (req: Request, res: Response) => {
  try {
    const parsedData = TimeslotSchema.parse(req.body); // Validate against Zod schema
    const updatedTimeslot = await Timeslot.findByIdAndUpdate(
      req.params.id,
      parsedData,
      { new: true }
    );
    if (!updatedTimeslot) {
      res.status(404).json({ success: false, message: "Timeslot not found" });
    } else {
      res.status(200).json({ success: true, data: updatedTimeslot });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: (err as Error).message });
  }
};

export const deleteTimeslot = async (req: Request, res: Response) => {
  try {
    const deletedTimeslot = await Timeslot.findByIdAndDelete(req.params.id);
    if (!deletedTimeslot) {
      res.status(404).json({ success: false, message: "Timeslot not found" });
    } else {
      res.status(200).json({ success: true, data: {} });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: (err as Error).message });
  }
};
