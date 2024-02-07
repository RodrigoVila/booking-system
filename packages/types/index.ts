import { z } from "zod";

export const BookingSchema = z.object({
  _id: z.string().optional(),
  clientName: z.string(),
  serviceType: z.string(),
  bookingDate: z.string(),
  paidAmount: z.number().optional(),
  notes: z.string().optional(),
});

export const ServiceSchema = z.object({
  title: z.string(),
  imgSrc: z.string(),
  description: z.string(),
  options: z.array(
    z.object({
      duration: z.number(),
      price: z.number(),
    })
  ),
});

export const WorkerSchema = z.object({
  name: z.string(),
  email: z.string(),
  specialties: z.array(z.string()).optional(),
});

export const UserSchema = z.object({
  email: z.string(),
  password: z.string().min(1),
  name: z.string().min(1),
  lastName: z.string().min(1),
  bookings: z.array(z.string()),
});

export const TimeslotSchema = z.object({
  workerId: z.string(),
  date: z.date(),
  startTime: z.string(),
  endTime: z.string(),
  isBooked: z.boolean(),
});

export type BookingType = z.infer<typeof BookingSchema>;
export type ServiceType = z.infer<typeof ServiceSchema>;
export type WorkerType = z.infer<typeof WorkerSchema>;
export type UserType = z.infer<typeof UserSchema>;
export type TimeslotType = z.infer<typeof TimeslotSchema>;
