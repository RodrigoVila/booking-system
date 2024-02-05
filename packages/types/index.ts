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

export type BookingType = z.infer<typeof BookingSchema>;
export type ServiceType = z.infer<typeof ServiceSchema>;
