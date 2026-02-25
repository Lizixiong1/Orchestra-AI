import { lazy, Suspense } from "react";
import "./App.css";
import componentMap from "@Orchestra-AI/materials";

console.log(componentMap);

const Page = lazy(componentMap["Page"]);

function App() {
  return (
    <Page
      elements={[
        {
          type: "Input",
          id: "a",
        },
      ]}
    />
  );
}

export default App;
