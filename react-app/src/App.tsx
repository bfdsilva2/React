import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = ["New York", "London", "San Francisco", "Lisbon", "Paris"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Alert message</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Button Name</Button>
    </div>
  );
}

export default App;
