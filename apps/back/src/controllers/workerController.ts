import { Request, Response } from "express";

import { WorkerSchema, WorkerType } from "shared-types";

import { Worker } from "../models/worker";

type NullableWorkerType = WorkerType | null;

const getWorkers = async (_: Request, res: Response) => {
  try {
    const workers: WorkerType[] = await Worker.find();
    res.status(200).json({ success: true, data: workers });
  } catch (err) {
    res.status(500).json({ success: false, message: (err as Error).message });
  }
};

const getWorkerById = async (req: Request, res: Response) => {
  try {
    const worker: NullableWorkerType = await Worker.findById(req.params.id);
    if (worker) {
      res.status(200).json({ success: true, data: worker });
    } else {
      res.status(404).json({ success: false, message: "Worker not found" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: (err as Error).message });
  }
};

const createWorker = async (req: Request, res: Response) => {
  try {
    const parsedData = WorkerSchema.parse(req.body);
    const worker = new Worker(parsedData);
    const newWorker: WorkerType = await worker.save();

    res.status(201).json({ success: true, data: newWorker });
  } catch (err) {
    res.status(400).json({ success: false, message: (err as Error).message });
  }
};

const updateWorker = async (req: Request, res: Response) => {
  try {
    const updatedWorker: NullableWorkerType = await Worker.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (updatedWorker) {
      res.status(200).json({ success: true, data: updatedWorker });
    } else {
      res.status(404).json({ success: false, message: "Worker not found" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: (err as Error).message });
  }
};

const deleteWorker = async (req: Request, res: Response) => {
  try {
    const deletedWorker: NullableWorkerType = await Worker.findByIdAndDelete(
      req.params.id
    );
    if (deletedWorker) {
      res.status(200).json({ success: true, data: deletedWorker });
    } else {
      res.status(404).json({ message: "Worker not found" });
    }
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

export { getWorkers, getWorkerById, createWorker, updateWorker, deleteWorker };
