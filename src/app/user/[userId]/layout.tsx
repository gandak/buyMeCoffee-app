import { Sidebar } from "@/app/(home)/_components/Sidebar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const layout = (props: Props) => {
  return (
    <div className="flex w-screen pt-24 m-auto">
      <Sidebar />
      <div className="w-[78%]">{props.children}</div>
    </div>
  );
};

export default layout;
