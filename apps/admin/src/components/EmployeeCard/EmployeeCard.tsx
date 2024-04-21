import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { EmployeeType } from 'shared-types';

import { Button } from '@components/Buttons/Button';

type EmployeeCardProps = {
  employee: EmployeeType;
  onEdit: (employee: EmployeeType) => void;
  onDelete: (employeeId: string) => void;
};

export const EmployeeCard = ({
  employee,
  onEdit,
  onDelete,
}: EmployeeCardProps) => {
  return (
    <div className="m-4 flex justify-between rounded-lg bg-slate-900 p-4 text-white shadow-lg">
      <div>
        <h3 className="mb-2 text-2xl font-bold">{employee.name}</h3>
        <p>
          <strong>Email:</strong> {employee.email}
        </p>
        <p>
          <strong>Phone number:</strong> {employee.phoneNumber}
        </p>
      </div>
      <div className="mt-4">
        <h4 className="mb-2 text-lg font-semibold">Weekly Times</h4>
        {employee.weeklyAvailability ? (
          <ul className="inline">
            {Object.entries(employee.weeklyAvailability).map(
              ([day, { start, end }]) => (
                <li key={day} className="">
                  <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong>{' '}
                  {start} - {end}
                </li>
              ),
            )}
          </ul>
        ) : null}
      </div>
      <div className="flex items-start gap-4">
        <Button
          variant="outline"
          onClick={() => onEdit(employee)}
          className="rounded-full p-2"
        >
          <FaPencilAlt />
        </Button>
        <Button
          variant="outline"
          onClick={() => employee._id && onDelete(employee._id)}
          className="rounded-full p-2 hover:text-red-400"
        >
          <FaTrashAlt />
        </Button>
      </div>
    </div>
  );
};
