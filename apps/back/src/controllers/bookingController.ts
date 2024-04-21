import { Request, Response } from "express";

import { BookingSchema, BookingType } from "shared-types";

import { Booking } from "../models/booking";

type NullableBookingType = BookingType | null;

const getBookings = async (_: Request, res: Response) => {
  try {
    const bookings: BookingType[] = await Booking.find();
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getBookingById = async (req: Request, res: Response) => {
  try {
    const booking: NullableBookingType = await Booking.findById(req.params.id);
    if (booking) {
      res.status(200).json(booking);
    } else {
      res.status(404).json({ success: false, message: "Booking not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const createBooking = async (req: Request, res: Response) => {
  try {
    const parsedData = BookingSchema.parse(req.body);
    const booking = new Booking(parsedData);
    const newBooking: BookingType = await booking.save();

    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json(err);
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
      res.status(200).json(updatedBooking);
    } else {
      res.status(404).json({ success: false, message: "Booking not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteBooking = async (req: Request, res: Response) => {
  try {
    const deletedBooking: NullableBookingType = await Booking.findByIdAndDelete(
      req.params.id
    );
    if (deletedBooking) {
      res.status(200).json(deletedBooking);
    } else {
      res.status(404).json({ success: false, message: "Booking not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export {
  getBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
};
