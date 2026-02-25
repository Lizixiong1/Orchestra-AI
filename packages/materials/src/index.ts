import { ComponentType } from "react";

const componentMap: Record<string, any> = {};
const modules: { [key: string]: () => Promise<any> } = import.meta.glob(
  "./[a-zA-Z]+/**",
);
for (const path in modules) {
  const [type, name] = path.split("/").slice(-2);
console.log(type,name);

  if (type === name.split(".")[0]) {
    componentMap[type] = modules[path];
  }
}

export default componentMap;
