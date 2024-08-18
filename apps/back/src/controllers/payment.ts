import { Request, Response } from "express";
import { Payment } from "../models/payment";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const getPayments = async (req: Request, res: Response) => {
  try {
    const payments = await Payment.find()
      .populate("userId")
      .populate("orderId");
    res.status(200).json(payments);
  } catch (err) {
    console.error("Error fetching payments:", err);
    res
      .status(500)
      .json({ message: "An error occurred while fetching payments" });
  }
};

export const getPaymentById = async (req: Request, res: Response) => {
  try {
    const payment = await Payment.findById(req.params.id)
      .populate("userId")
      .populate("orderId");
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }
    res.status(200).json(payment);
  } catch (err) {
    console.error("Error fetching payment by ID:", err);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the payment" });
  }
};

export const createPayment = async (req: Request, res: Response) => {
  const { userId, orderId, amount, currency, paymentMethod, transactionId } =
    req.body;

  try {
    const newPayment = new Payment({
      userId,
      orderId,
      amount,
      currency,
      paymentMethod,
      transactionId,
      status: "pending",
    });

    const savedPayment = await newPayment.save();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: currency,
            product_data: {
              name: "Order #" + orderId,
            },
            unit_amount: amount * 100, // Amount in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    savedPayment.transactionId = session.id;
    await savedPayment.save();

    res
      .status(201)
      .json({ payment: savedPayment, stripeSessionUrl: session.url });
  } catch (err) {
    console.error("Error creating payment:", err);
    res
      .status(500)
      .json({ message: "An error occurred while creating the payment" });
  }
};

export const updatePayment = async (req: Request, res: Response) => {
  try {
    const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }
    res.status(200).json(payment);
  } catch (err) {
    console.error("Error updating payment:", err);
    res
      .status(500)
      .json({ message: "An error occurred while updating the payment" });
  }
};

export const deletePayment = async (req: Request, res: Response) => {
  try {
    const payment = await Payment.findByIdAndDelete(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }
    res.status(200).json({ message: "Payment deleted successfully" });
  } catch (err) {
    console.error("Error deleting payment:", err);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the payment" });
  }
};
