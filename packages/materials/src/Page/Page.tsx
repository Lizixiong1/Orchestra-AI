import { ComponentType, FC, lazy, useEffect, useState } from "react";
import { BasicConfig, ElementItem } from "../typings";
import usePageStore from "../stores/pageStore";
import Input from "../Form/Input/Input";

export interface Config extends BasicConfig {
  elements?: Array<ElementItem>;
}

const cacheComponentMap: Record<string, any> = {};

const Element: FC<ElementItem> = () => {
  const [Com, setCom] = useState<ComponentType | null>(null);
  useEffect(() => {}, []);
  return Com ? <Com /> : Com;
};

const Page: FC<Config> = (props) => {
  const { elements, ...stateProps } = props;

  console.log(elements);

  return (
    <div style={props.style}>
      {props.elements?.map((props) => (
        <Element key={props.id} {...props} />
      ))}
    </div>
  );
};

export default Page;
