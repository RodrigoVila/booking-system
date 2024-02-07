import { Request, Response } from "express";
import { Timeslot } from "../models/timeslot"; // Adjust the import path as necessary

// List timeslots for a given range
const getTimeslots = async (req: Request, res: Response) => {
  try {
    const { startDate, endDate, workerId } = req.query; // Example filters
    const query = {
      date: { $gte: startDate, $lte: endDate },
      ...(workerId && { workerId: workerId }),
    };
    const timeslots = await Timeslot.find(query);
    res.status(200).json({ success: true, data: timeslots });
  } catch (err) {
    res.status(500).json({ success: false, message: (err as Error).message });
  }
};

const getTimeslotById = async (req: Request, res: Response) => {
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

const createTimeslot = async (req: Request, res: Response) => {
  try {
    const newTimeslot = new Timeslot(req.body);
    const savedTimeslot = await newTimeslot.save();
    res.status(201).json({ success: true, data: savedTimeslot });
  } catch (err) {
    res.status(400).json({ success: false, message: (err as Error).message });
  }
};

const updateTimeslot = async (req: Request, res: Response) => {
  try {
    const updatedTimeslot = await Timeslot.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Returns the modified document rather than the original.
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

const deleteTimeslot = async (req: Request, res: Response) => {
  try {
    const deletedTimeslot = await Timeslot.findByIdAndDelete(req.params.id);
    if (!deletedTimeslot) {
      res.status(404).json({ success: false, message: "Timeslot not found" });
    } else {
      res.status(200).json({ success: true, data: {} }); // Return empty object to indicate successful deletion
    }
  } catch (err) {
    res.status(500).json({ success: false, message: (err as Error).message });
  }
};

export {
  getTimeslots, // Assuming this is already defined as per your previous prompt
  getTimeslotById,
  createTimeslot,
  updateTimeslot,
  deleteTimeslot,
};
