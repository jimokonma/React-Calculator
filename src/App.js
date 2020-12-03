import React, { useState } from "react";
import * as math from "mathsjs";
import Buttons from "./components/buttons";

function App() {
  const [displayIput, setDisplayInput] = useState("");

  function handleClick(val) {
    if (val !== "del" && val !== "=") {
      setDisplayInput((prevVal) => {
        return prevVal + val;
      });
    } else {
      if (val !== "del") {
        setDisplayInput(math.eval("1 - 2"));
      } else {
        setDisplayInput("");
      }
    }
  }

  return (
    <div className="App">
      <h3>Calculator</h3>
      <div className="display">{displayIput}</div>
      <Buttons data={handleClick} />
    </div>
  );
}

export default App;
