import { Request, Response } from "express";

import { EmployeeSchema, EmployeeType } from "shared-types";

import { Employee } from "../models/employee";

type NullableEmployeeType = EmployeeType | null;

const getEmployees = async (_: Request, res: Response) => {
  try {
    const employees: EmployeeType[] = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getEmployeeById = async (req: Request, res: Response) => {
  try {
    const employee: NullableEmployeeType = await Employee.findById(
      req.params.id
    );
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).json({ success: false, message: "Employee not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const createEmployee = async (req: Request, res: Response) => {
  try {
    const parsedData = EmployeeSchema.parse(req.body);
    const employee = new Employee(parsedData);
    const newEmployee: EmployeeType = await employee.save();

    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateEmployee = async (req: Request, res: Response) => {
  try {
    const updatedEmployee: NullableEmployeeType =
      await Employee.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
    if (updatedEmployee) {
      res.status(200).json(updateEmployee);
    } else {
      res.status(404).json({ success: false, message: "Employee not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const deletedEmployee: NullableEmployeeType =
      await Employee.findByIdAndDelete(req.params.id);
    if (deletedEmployee) {
      res.status(200).json(deletedEmployee);
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
