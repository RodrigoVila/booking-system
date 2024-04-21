import { IoMdAdd } from 'react-icons/io';
import { twMerge } from 'tailwind-merge';

import { Button, ButtonProps } from '../Button';

type AddButtonProps = ButtonProps & {
  className?: string;
};

export const AddButton = ({ className, ...rest }: AddButtonProps) => {
  return (
    <Button
      {...rest}
      className={twMerge(
        'group absolute right-3 top-3 rounded-full border-2 bg-transparent !p-0 hover:bg-white',
        className,
      )}
    >
      <IoMdAdd
        size={35}
        className="rounded-full text-white hover:bg-white hover:text-black"
      />
    </Button>
  );
};
