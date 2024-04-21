import { ServiceType } from "shared-types";

import { BASE_URL } from "@constants";

// Services
export const fetchServices = async (): Promise<ServiceType[] | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/services`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error("Error getting Services: ", e);
  }
};

export const createNewService = async (
  service: ServiceType,
): Promise<void | boolean> => {
  try {
    const response = await fetch(`${BASE_URL}/services`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    });

    if (!response.ok) {
      throw new Error("Error creating new service");
    }

    console.log("Service created successfully");
  } catch (error) {
    console.error("Error creating new service: ", error);
    throw new Error("Service creation failed");
  }
};

export const deleteServiceById = async (id: string): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URL}/services/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Service deletion failed");
    }

    console.log("Service deleted successfully");
  } catch (error) {
    console.error("Service deletion failed", error);
    throw new Error("Service deletion failed");
  }
};

export const fetchServiceById = async (id: string): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URL}/services/${id}`);

    if (!response.ok) {
      throw new Error("Error fetching service");
    }

    console.log("Service deleted successfully");
  } catch (error) {
    console.error("Error fetching service", error);
    throw new Error("Error fetching service");
  }
};

export const updateServiceById = async (
  service: ServiceType,
): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URL}/services/${service._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    });

    if (!response.ok) {
      throw new Error("Error updating service");
    }

    console.log("Service deleted successfully");
  } catch (error) {
    console.error("Error updating service", error);
    throw new Error("Error updating service");
  }
};
