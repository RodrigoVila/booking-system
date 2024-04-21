import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { MdOutlineEmail, MdOutlineLocalPhone } from 'react-icons/md';
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
  const { name, email, phoneNumber, weeklyAvailability, imgUrl } = employee;
  return (
    <div className="m-4 flex justify-between rounded-lg bg-slate-900 p-4 text-white shadow-lg">
      <div className="flex flex-col gap-4">
        <img src={imgUrl ?? '/no_img.jpg'} className="h-40 rounded-full" />
        <h3 className="mb-2 text-4xl font-bold">{name}</h3>
        <div className="flex items-center gap-2 text-xl">
          <MdOutlineEmail />
          <p>{email}</p>
        </div>
        <div className="flex items-center gap-2 text-xl">
          <MdOutlineLocalPhone />
          <p>{phoneNumber}</p>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="mb-2 text-lg font-semibold">Weekly Times</h4>
        {weeklyAvailability ? (
          <ul className="inline">
            {Object.entries(weeklyAvailability).map(([day, { start, end }]) => (
              <li key={day} className="">
                <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong>{' '}
                {start} - {end}
              </li>
            ))}
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
