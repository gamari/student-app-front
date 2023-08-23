import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export const Modal: FunctionComponent<Props> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={() => {
        onClose();
      }}
    >
      <div
        className="border-2 border-gray-500 bg-white p-4 rounded shadow-lg w-96"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};
