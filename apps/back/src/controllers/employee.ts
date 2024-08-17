import { Request, Response } from "express";
import { EmployeeSchema, EmployeeType } from "shared-types";
import { Employee } from "../models/employee";

export const getEmployees = async (_: Request, res: Response) => {
  try {
    const employees: EmployeeType[] = await Employee.find();
    res.status(200).json({ data: employees });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred while fetching employees" });
  }
};

export const getEmployeeById = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (employee) {
      res.status(200).json({ data: employee });
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the employee" });
  }
};

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const parsedData = EmployeeSchema.parse(req.body);
    const employee = new Employee(parsedData);
    const newEmployee: EmployeeType = await employee.save();
    res.status(201).json({ data: newEmployee });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Invalid data provided" });
  }
};

export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const parsedData = EmployeeSchema.parse(req.body);
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      parsedData,
      {
        new: true,
      }
    );
    if (updatedEmployee) {
      res.status(200).json({ data: updatedEmployee });
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred while updating the employee" });
  }
};

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    if (deletedEmployee) {
      res.status(200).json({ data: deletedEmployee });
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the employee" });
  }
};
