import { z } from "zod";
import { BookingStatus, PaymentStatus, PaymentMethod } from "../constants";

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
    .enum([
      BookingStatus.Confirmed,
      BookingStatus.Cancelled,
      BookingStatus.Pending,
    ])
    .optional()
    .default(BookingStatus.Pending),
});

export const ServiceSchema = z.object({
  _id: z.string().optional(),
  name: z.string(),
  imgUrl: z.string(),
  description: z.string(),
  options: z.array(
    z.object({
      duration: z.number(),
      price: z.number(),
    })
  ),
  restPeriod: z.number(),
  employees: z.array(z.string()).optional(),
});

export const EmployeeSchema = z.object({
  _id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
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
  googleAccount: z.boolean().optional(),
  confirmed: z.boolean().optional(),
  bookings: z.array(z.string()).optional(),
});

export const TimeslotSchema = z.object({
  employeeId: z.string(),
  serviceType: z.string(),
  date: z.date(),
  startTime: z.string(),
  endTime: z.string(),
  isBooked: z.boolean(),
});

export const PasswordRecoverySchema = z.object({
  email: z.string(),
  token: z.string(),
  created: z.date(),
});

export const PaymentSchema = z.object({
  _id: z.string().optional(),
  userId: z.string(),
  orderId: z.string(),
  amount: z.number(),
  currency: z.string().default("USD"),
  status: z
    .enum([
      PaymentStatus.Completed,
      PaymentStatus.Failed,
      PaymentStatus.Pending,
      PaymentStatus.Refunded,
    ])
    .default(PaymentStatus.Pending),
  paymentMethod: z.enum([
    PaymentMethod.CreditCard,
    PaymentMethod.Paypal,
    PaymentMethod.Stripe,
    PaymentMethod.Other,
  ]),
  transactionId: z.string(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type BookingType = z.infer<typeof BookingSchema>;
export type ServiceType = z.infer<typeof ServiceSchema>;
export type EmployeeType = z.infer<typeof EmployeeSchema>;
export type UserType = z.infer<typeof UserSchema>;
export type TimeslotType = z.infer<typeof TimeslotSchema>;
export type PasswordRecoveryType = z.infer<typeof PasswordRecoverySchema>;
export type PaymentType = z.infer<typeof PaymentSchema>;

type ValuePiece = Date | null;

export type CalendarValue = ValuePiece | [ValuePiece, ValuePiece];
