import { ChangeEvent, MouseEvent, useState } from 'react';
import { EmployeeSchema, EmployeeType } from 'shared-types';
import { twMerge } from 'tailwind-merge';

import { Button } from '@components/Buttons/Button';
import { Input } from '@components/Input';

type AddEditEmployeeFormProps = {
  employee: EmployeeType | null;
  isLoading: boolean;
  onSubmit: (data: EmployeeType) => void;
};

export const AddEditEmployeeForm = ({
  employee,
  isLoading,
  onSubmit,
}: AddEditEmployeeFormProps) => {
  const [formData, setFormData] = useState({
    _id: employee?._id ?? undefined,
    name: employee?.name ?? '',
    email: employee?.email ?? '',
    phoneNumber: employee?.phoneNumber ?? '',
    weeklyAvailability: employee?.weeklyAvailability ?? {
      monday: { start: '', end: '' },
      tuesday: { start: '', end: '' },
      wednesday: { start: '', end: '' },
      thursday: { start: '', end: '' },
      friday: { start: '', end: '' },
      saturday: { start: '', end: '' },
      sunday: { start: '', end: '' },
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const result = EmployeeSchema.safeParse(formData);
    console.log({ result });
    if (result.success) {
      onSubmit(result.data);
    } else {
      // Handle validation errors
      console.error(result.error.issues);
    }
  };

  return (
    <form>
      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        disabled={isLoading}
      />
      <Input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        disabled={isLoading}
      />
      <Input
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
        disabled={isLoading}
      />
      <h4>Available days</h4>
      <div className="my-4 border-2 border-white p-4">
        <div className="flex items-center justify-center gap-3">
          Mon:
          <Input type="time" onChange={() => {}} className="h-8" />
          to
          <Input type="time" onChange={() => {}} className="h-8" />
        </div>
      </div>
      {/* Additional inputs for `weeklyAvailability` could be handled similarly */}
      <Button
        type="submit"
        variant="outline"
        className={twMerge(
          'w-full rounded',
          isLoading && 'pointer-events-none',
        )}
        isLoading={isLoading}
        onClick={handleSubmit}
      >
        {employee ? 'Save' : 'Create'}
      </Button>
    </form>
  );
};
