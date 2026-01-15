import { useState } from "react";
import "./App.css";
import { Button } from "./components/button";
import { PlusIcon } from "./Icons/PlusIcon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button
        startIcon={<PlusIcon size="md" />}
        size="sm"
        variant="primary"
        text="Share"
        onClick={() => {
          console.log("Share clicked");
        }}
      />

      <Button
        size="md"
        variant="secondary"
        text="Add Content"
        onClick={() => {
          console.log("Add Content clicked");
        }}
      />
    </>
  );
}

export default App;
