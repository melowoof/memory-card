import { useState } from "react";
import "./App.css";
import Healthbar from "./components/Healthbar/Healthbar.jsx";
import Button from "./components/Button/Button.jsx";

function App() {

  return (
    <>
      <Healthbar maxValue={15} currentValue={0} />
      <Button text={"RESTART"}/>
    </>
  );
}

export default App;
