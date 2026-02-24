import React, { FC } from "react";
import { BasicConfig } from "../typings";

export interface Config extends BasicConfig {}

const Page: FC<Config> = ({ id, title }) => {
  // const store = useStore();
  return <div>index</div>;
};

export default Page;
