import React, { useState, useEffect } from "react";
import RightPanel from './RightPanel'

const LeftPanel = ({}) => {
  const [color, setColor] = useState("");
  const [truthyValue, setTruthyValue] = useState("0000FF");
  const [errorMessage, setErrorMessage] = useState('');

  console.log('tv',truthyValue);

  const submithandler = (e) => {
    e.preventDefault();
    const isHexColor = (setColor) =>
      typeof setColor === "string" && setColor.length === 6&3 && !isNaN(Number("0x" + setColor));

      console.log(isHexColor(color)) 
      console.log(color) 

  if(isHexColor(color)) {
    // alert('true')
    setTruthyValue(color)
  } else {
    alert('worng')
    setErrorMessage('Invalid hex code!');
  }
  };

  return (
    <>
    <div
      style={{
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <h1>hello left Panel</h1> */}
      <br />
      <form onSubmit={submithandler}>
        <label>Hex code: &nbsp;</label>
        <input
        type="hex"
        // pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Enter hex code"
        />
        {errorMessage && (
        <p style={{color:'red'}} className="error"> {errorMessage} </p>
        )}
      </form>
    </div>
      <RightPanel tv={truthyValue} />
    </>
  );
};

export default LeftPanel;
