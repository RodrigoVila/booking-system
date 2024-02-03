import { z } from "zod";

export const BookingSchema = z.object({
  _id: z.string().optional(),
  clientName: z.string(),
  serviceType: z.string(),
  bookingDate: z.string(),
  paidAmount: z.number().optional(),
  notes: z.string().optional(),
});

export type BookingType = z.infer<typeof BookingSchema>;
