import React, { useState } from "react";
import Input from "../components/Input";
function Data(props) {
  function handleClick(event) {
    // console.log(event);
    if (event === "AC") {
      props.setInput("");
    } else if (event === "=") {
      try {
        const ans = eval(props.value);
        props.setInput(ans);
      } catch (e) {
        alert("Syntax wrong");
        props.setInput("");
      }
    } else {
      const ans = props.value + event;
      props.setInput(ans);
    }
  }

  return (
    <div className="set">
      <button
        onClick={() => {
          handleClick(props.a);
        }}
        className="button"
      >
        {props.a}
      </button>
      <button
        onClick={() => {
          handleClick(props.b);
        }}
        className="button"
      >
        {props.b}
      </button>
      <button
        onClick={() => {
          handleClick(props.c);
        }}
        className="button"
      >
        {props.c}
      </button>
      <button
        onClick={() => {
          handleClick(props.d);
        }}
        className="button"
      >
        {props.d}
      </button>
    </div>
  );
}

export default Data;
