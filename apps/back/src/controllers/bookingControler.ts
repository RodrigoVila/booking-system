import { Request, Response } from "express";
import { Booking } from "../models/booking";
import { BookingSchema, BookingType } from "types";

type NullableBookingType = BookingType | null;

const getBookings = async (_: Request, res: Response) => {
  try {
    const bookings: BookingType[] = await Booking.find();
    res.status(200).json({ success: true, data: bookings });
  } catch (err) {
    res.status(500).json({ success: false, message: (err as Error).message });
  }
};

const getBookingById = async (req: Request, res: Response) => {
  try {
    const booking: NullableBookingType = await Booking.findById(req.params.id);
    if (booking) {
      res.status(200).json({ success: true, data: booking });
    } else {
      res.status(404).json({ success: false, message: "Booking not found" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: (err as Error).message });
  }
};

const createBooking = async (req: Request, res: Response) => {
  try {
    const parsedData = BookingSchema.parse(req.body);
    const booking = new Booking(parsedData);
    const newBooking: BookingType = await booking.save();

    res.status(201).json({ success: true, data: newBooking });
  } catch (err) {
    res.status(400).json({ success: false, message: (err as Error).message });
  }
};

const updateBooking = async (req: Request, res: Response) => {
  try {
    const updatedBooking: NullableBookingType = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (updatedBooking) {
      res.status(200).json({ success: true, data: updatedBooking });
    } else {
      res.status(404).json({ success: false, message: "Booking not found" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: (err as Error).message });
  }
};

const deleteBooking = async (req: Request, res: Response) => {
  try {
    const deletedBooking: NullableBookingType = await Booking.findByIdAndDelete(
      req.params.id
    );
    if (deletedBooking) {
      res.status(200).json({ success: true, data: deletedBooking });
    } else {
      res.status(404).json({ message: "Booking not found" });
    }
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

export {
  getBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
};
