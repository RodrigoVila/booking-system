import { Request, Response } from "express";
import { Service } from "../models/service"; // Adjust the import path as necessary

const getServices = async (_: Request, res: Response) => {
  try {
    const services = await Service.find();
    res.status(200).json({ success: true, data: services });
  } catch (err) {
    res.status(500).json({ success: false, message: (err as Error).message });
  }
};

const getServiceById = async (req: Request, res: Response) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      res.status(404).json({ success: false, message: "Service not found" });
    } else {
      res.status(200).json({ success: true, data: service });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: (err as Error).message });
  }
};

const createService = async (req: Request, res: Response) => {
  try {
    const newService = new Service(req.body);
    const savedService = await newService.save();
    res.status(201).json({ success: true, data: savedService });
  } catch (err) {
    res.status(400).json({ success: false, message: (err as Error).message });
  }
};

const updateService = async (req: Request, res: Response) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedService) {
      res.status(404).json({ success: false, message: "Service not found" });
    } else {
      res.status(200).json({ success: true, data: updatedService });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: (err as Error).message });
  }
};

const deleteService = async (req: Request, res: Response) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) {
      res.status(404).json({ success: false, message: "Service not found" });
    } else {
      res
        .status(200)
        .json({ success: true, message: "Service deleted successfully" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: (err as Error).message });
  }
};

export {
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};
