import React, { FC } from "react";
import { BasicConfig } from "../typings";

export interface Config extends BasicConfig {}

const Layout: FC<Config> = () => {
  return <div>Layout</div>;
};

export default Layout;
