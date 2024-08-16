import { z } from "zod";

export const BookingSchema = z.object({
  _id: z.string().optional(),
  client: z.string(),
  service: z.string(),
  employee: z.string(),
  bookingStart: z.string(),
  bookingEnd: z.string(),
  paidAmount: z.number().optional(),
  notes: z.string().optional(),
  status: z
    .enum(["pending", "confirmed", "cancelled"])
    .optional()
    .default("pending"),
});

export const ServiceSchema = z.object({
  _id: z.string().optional(),
  title: z.string(),
  imgSrc: z.string(),
  description: z.string(),
  options: z.array(
    z.object({
      duration: z.number(),
      price: z.number(),
    })
  ),
  employees: z.array(z.string()).optional(),
});

const AvailableDate = z.object({ start: z.string(), end: z.string() });

export const EmployeeSchema = z.object({
  name: z.string(),
  email: z.string().optional(),
  phoneNumber: z.string().optional(),
  _id: z.string().optional(),
  imgUrl: z.string().optional(),
  weeklyAvailability: z
    .array(
      z.object({
        day: z.string(),
        start: z.string(),
        end: z.string(),
      })
    )
    .optional(),
});

export const UserSchema = z.object({
  _id: z.string().optional(),
  email: z.string(),
  password: z.string().min(1).optional(),
  name: z.string().min(1),
  lastName: z.string().min(1),
  role: z.enum(["admin", "user", "employee"]),
  bookings: z.array(z.string()).optional(),
});

export const TimeslotSchema = z.object({
  employeeId: z.string(),
  date: z.date(),
  startTime: z.string(),
  endTime: z.string(),
  isBooked: z.boolean(),
});

export type BookingType = z.infer<typeof BookingSchema>;
export type ServiceType = z.infer<typeof ServiceSchema>;
export type EmployeeType = z.infer<typeof EmployeeSchema>;
export type UserType = z.infer<typeof UserSchema>;
export type TimeslotType = z.infer<typeof TimeslotSchema>;

type ValuePiece = Date | null;

export type CalendarValue = ValuePiece | [ValuePiece, ValuePiece];
