import React, { useState } from "react";
function Input(props) {
  return (
    <div>
      <input type="text" value={props.value} />
    </div>
  );
}

export default Input;
