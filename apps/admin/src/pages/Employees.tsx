import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import {
  createNewEmployee,
  deleteEmployeeById,
  fetchEmployees,
  updateExistingEmployee,
} from '@services/employee';
import { EmployeeType } from 'shared-types';

import { useToggleState } from '@hooks';
import { AddButton } from '@components/Buttons/AddButton';
import { EmployeeCard } from '@components/EmployeeCard';
import { AddEditEmployeeForm } from '@components/Forms/AddEditEmployeeForm';
import { Loader } from '@components/Loader';
import { Modal } from '@components/Modal';

export const Employees = () => {
  const {
    isOpen: isAddEditOpen,
    open: openAddEdit,
    close: closeAddEdit,
  } = useToggleState();

  const [currentEmployee, setCurrentEmployee] = useState<EmployeeType | null>(
    null,
  );

  const { data: employees, isLoading: areEmployeesLoading } = useQuery(
    'getEmployees',
    fetchEmployees,
    { retry: 1 },
  );

  const { mutateAsync: createEmployee, isLoading: isCreateEmployeeLoading } =
    useMutation('createEmployee', createNewEmployee);

  const { mutateAsync: updateEmployee, isLoading: isUpdateEmployeeLoading } =
    useMutation('updateExistingEmployee', updateExistingEmployee);

  const { mutateAsync: deleteEmployee, isLoading: isDeleteEmployeeLoading } =
    useMutation('deleteEmployee', deleteEmployeeById);

  const isLoading =
    areEmployeesLoading ||
    isCreateEmployeeLoading ||
    isUpdateEmployeeLoading ||
    isDeleteEmployeeLoading;

  const handleAdd = () => {
    setCurrentEmployee(null);
    openAddEdit();
  };

  const handleEdit = (employee: EmployeeType) => {
    setCurrentEmployee(employee);
    openAddEdit();
  };

  const handleDelete = (employeeId: string) => {
    const text = 'Are you sure you want to delete?';
    if (confirm(text) == true) {
      deleteEmployee(employeeId);
    }
  };

  const handleSubmit = (formData: EmployeeType) => {
    currentEmployee ? updateEmployee(formData) : createEmployee(formData);

    setCurrentEmployee(null);
    closeAddEdit();
  };

  return (
    <>
      <section
        id="employees"
        className="pt-18 relative flex w-full flex-col gap-3 bg-slate-800 p-16"
      >
        <AddButton onClick={handleAdd} />
        {isLoading ? (
          <Loader />
        ) : (
          employees?.map((employee) => (
            <EmployeeCard
              key={employee._id}
              employee={employee}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        )}
      </section>

      <Modal
        title={`${currentEmployee ? 'Edit' : 'Create new'} employee`}
        isOpen={isAddEditOpen}
        onClose={closeAddEdit}
      >
        <AddEditEmployeeForm
          employee={currentEmployee}
          isLoading={isCreateEmployeeLoading || isUpdateEmployeeLoading}
          onSubmit={handleSubmit}
        />
      </Modal>
    </>
  );
};
