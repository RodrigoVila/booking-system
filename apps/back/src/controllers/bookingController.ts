import { Request, Response } from "express";
import { BookingSchema, BookingType } from "shared-types";
import { Booking } from "../models/booking";

type NullableBookingType = BookingType | null;

export const getBookings = async (_: Request, res: Response) => {
  try {
    const bookings: BookingType[] = await Booking.find()
      .populate("service")
      .populate("employee")
      .populate("client");
    res.status(200).json(bookings);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred while fetching bookings" });
  }
};

export const getBookingById = async (req: Request, res: Response) => {
  try {
    const booking: NullableBookingType = await Booking.findById(req.params.id)
      .populate("service")
      .populate("employee")
      .populate("client");
    if (booking) {
      res.status(200).json(booking);
    } else {
      res.status(404).json({ message: "Booking not found" });
    }
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the booking" });
  }
};

export const createBooking = async (req: Request, res: Response) => {
  try {
    const parsedData = BookingSchema.parse(req.body);
    const booking = new Booking(parsedData);
    const newBooking: BookingType = await booking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Invalid data provided" });
  }
};

export const updateBooking = async (req: Request, res: Response) => {
  try {
    const parsedData = BookingSchema.parse(req.body);
    const updatedBooking: NullableBookingType = await Booking.findByIdAndUpdate(
      req.params.id,
      parsedData,
      { new: true }
    );
    if (updatedBooking) {
      res.status(200).json(updatedBooking);
    } else {
      res.status(404).json({ message: "Booking not found" });
    }
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred while updating the booking" });
  }
};

export const deleteBooking = async (req: Request, res: Response) => {
  try {
    const deletedBooking: NullableBookingType = await Booking.findByIdAndDelete(
      req.params.id
    );
    if (deletedBooking) {
      res.status(200).json(deletedBooking);
    } else {
      res.status(404).json({ message: "Booking not found" });
    }
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the booking" });
  }
};

export const cancelBooking = async (req: Request, res: Response) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    booking.status = "cancelled";
    await booking.save();

    res
      .status(200)
      .json({ message: "Booking cancelled successfully", booking });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred while canceling the booking" });
  }
};

export const rescheduleBooking = async (req: Request, res: Response) => {
  try {
    const { bookingStart, bookingEnd } = req.body;

    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    if (new Date(bookingStart) >= new Date(bookingEnd)) {
      return res.status(400).json({
        message: "Invalid dates: bookingStart must be before bookingEnd",
      });
    }

    booking.bookingStart = bookingStart;
    booking.bookingEnd = bookingEnd;

    await booking.save();

    res
      .status(200)
      .json({ message: "Booking rescheduled successfully", booking });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred while rescheduling the booking" });
  }
};
