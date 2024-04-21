import { EmployeeType } from 'shared-types';

import { BASE_URL } from '@constants';

// Employees
export const fetchEmployees = async (): Promise<EmployeeType[]> => {
  try {
    const response = await fetch(`${BASE_URL}/employees`);
    const data = await response.json();

    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const createNewEmployee = async (
  employee: EmployeeType,
): Promise<void | boolean> => {
  try {
    const response = await fetch(`${BASE_URL}/employees`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    });

    if (!response.ok) {
      throw new Error('Error creating new employee');
    }

    console.log('Employee created successfully');
  } catch (error) {
    console.error('Error creating new employee: ', error);
    throw new Error('Employee creation failed');
  }
};

export const deleteEmployeeById = async (id: string): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URL}/employees/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Employee deletion failed');
    }

    console.log('Employee deleted successfully');
  } catch (error) {
    console.error('Employee deletion failed', error);
    throw new Error('Employee deletion failed');
  }
};

export const fetchEmployeeById = async (id: string): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URL}/employees/${id}`);

    if (!response.ok) {
      throw new Error('Error fetching employee');
    }

    console.log('Employee deleted successfully');
  } catch (error) {
    console.error('Error fetching employee', error);
    throw new Error('Error fetching employee');
  }
};

export const updateExistingEmployee = async (
  employee: EmployeeType,
): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URL}/employees/${employee._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    });

    if (!response.ok) {
      throw new Error('Error updating employee');
    }

    console.log('Employee deleted successfully');
  } catch (error) {
    console.error('Error updating employee', error);
    throw new Error('Error updating employee');
  }
};
