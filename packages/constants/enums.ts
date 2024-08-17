export enum BookingStatus {
  Pending = "pending",
  Confirmed = "confirmed",
  Cancelled = "cancelled",
}

export enum PaymentStatus {
  Pending = "pending",
  Completed = "completed",
  Failed = "failed",
  Refunded = "refunded",
}

export enum PaymentMethod {
  CreditCard = "credit_card",
  Paypal = "paypal",
  Stripe = "stripe",
  Other = "other",
}

export enum OrderStatus {
  Pending = "pending",
  Confirmed = "confirmed",
  Shipped = "shipped",
  Delivered = "delivered",
  Cancelled = "cancelled",
}

export enum UserRole {
  Admin = "admin",
  User = "user",
  Employee = "employee",
}
