import { Request, Response } from "express";
import { Service } from "../models/service"; // Adjust the import path as necessary

const getServices = async (_: Request, res: Response) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getServiceById = async (req: Request, res: Response) => {
  try {
    const service = await Service.findById(req.params.id);
    if (service) {
      res.status(200).json(service);
    } else {
      res.status(404).json({ success: false });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const createService = async (req: Request, res: Response) => {
  try {
    const newService = new Service(req.body);
    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateService = async (req: Request, res: Response) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedService) {
      res.status(200).json(updatedService);
    } else {
      res.status(404).json({ success: false, message: "Service not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteService = async (req: Request, res: Response) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (deletedService) {
      res.status(200).json(deletedService);
    } else {
      res.status(404).json({ success: false, message: "Service not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export {
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};
