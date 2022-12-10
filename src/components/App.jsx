import React, { useState } from "react";
import Data from "../components/Data";
import Input from "../components/Input";
function App() {
  const [inputValue, setInputValue] = useState("");

  function setInput(num) {
    setInputValue(num);
  }

  return (
    <div className="box">
      <Input value={inputValue} setInput={setInput} />
      <Data value={inputValue} setInput={setInput} a="C" b="/" c="%" d="M+" />
      <Data value={inputValue} setInput={setInput} a="7" b="8" c="9" d="*" />
      <Data value={inputValue} setInput={setInput} a="4" b="5" c="6" d="+" />
      <Data value={inputValue} setInput={setInput} a="1" b="2" c="3" d="-" />
      <Data value={inputValue} setInput={setInput} a="AC" b="0" c="." d="=" />
    </div>
  );
}
export default App;
