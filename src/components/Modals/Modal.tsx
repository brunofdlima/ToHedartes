import React from "react";
import ReactDOM from "react-dom";

import { HiX } from "react-icons/hi";

interface Props {
  title?: string;
  closeModal(): void;
}

type ModalProps = JSX.IntrinsicElements["div"] & Props;

export const Modal: React.FC<ModalProps> = ({
  title,
  closeModal,
  children,
  ...rest
}) => {
  return ReactDOM.createPortal(
    <div
      {...rest}
      className="absolute inset-0 flex items-center justify-center cursor-auto"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="h-fit w-fit min-w-[50rem] bg-white py-4 px-12 rounded">
        <div className="flex items-center justify-between border-b pb-4">
          <p className="text-3xl font-bold">{title}</p>
          <button
            className="rounded-md p-1 hover:bg-[#F0F0F0]"
            onClick={closeModal}
          >
            <HiX className="h-8 w-8" />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
};
