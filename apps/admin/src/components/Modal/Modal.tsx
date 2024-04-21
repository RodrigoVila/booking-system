import { ReactNode, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { twMerge } from 'tailwind-merge';

import { Button } from '@components/Buttons/Button';
import { Portal } from '@utils';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  className?: string;
  disableOutsideClick?: boolean;
};

export const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  className,
  disableOutsideClick = true,
}: ModalProps) => {
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [isOpen]);

  return isOpen ? (
    <Portal>
      <div
        className="bg-darkOverlay absolute inset-0 z-[2] flex items-center justify-center text-center"
        onClick={disableOutsideClick ? undefined : onClose}
      >
        <div
          className={twMerge(
            'relative m-4 h-fit max-w-xl rounded-lg bg-slate-900 p-6 pt-5',
            className,
          )}
          onClick={(e) => e.preventDefault()}
        >
          <div className="flex items-center justify-center">
            <h3 className="mx-16 mb-4 text-xl">{title ?? ' '}</h3>
            <Button
              className="absolute right-3 top-3 bg-transparent !p-1 text-white"
              onClick={onClose}
            >
              <AiOutlineClose size={28} />
            </Button>
          </div>
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};
