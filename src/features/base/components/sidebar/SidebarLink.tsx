import React, { FunctionComponent } from "react";
import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
  label: string;
  onClick?: () => void;
  className?: string;
}

export const SidebarLink: FunctionComponent<Props> = ({
  Icon,
  label,
  onClick,
  className = "",
}) => {
  return (
    <div
      onClick={onClick}
      className={`p-2 flex flex-row space-x-2 items-center cursor-pointer hover:bg-slate-500 rounded-lg transition duration-200 ${className}`}
    >
      <Icon size={24} />
      <div>{label}</div>
    </div>
  );
};
