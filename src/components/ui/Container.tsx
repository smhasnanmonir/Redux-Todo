import { ReactNode } from "react";

type TodoContainer = {
  children: ReactNode;
};

const Container = ({ children }: TodoContainer) => {
  return <div className="px-[10%]">{children}</div>;
};

export default Container;
