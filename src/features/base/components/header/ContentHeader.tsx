import React, { FunctionComponent } from "react";
import { Block } from "../Block";

interface Props {
  className?: string;
}

export const ContentHeader: FunctionComponent<Props> = ({ className }) => {
  return (
    <Block
      className={`h-16 flex flex-row justify-between items-center ${className}`}
    >
      <div className="p-4 text-lg font-bold">スケジュール管理</div>
    </Block>
  );
};
