import React, { ReactNode } from "react";
import { Sidebar } from "./_components/Sidebar";

type Props = {
  children: ReactNode;
};

const layout = (props: Props) => {
  return (
    <div className="flex w-screen pt-24 justify-between">
      <Sidebar />
      <div className="w-[80%]">{props.children}</div>
    </div>
  );
};

export default layout;
