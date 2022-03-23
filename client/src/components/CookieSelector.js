import React, { useState } from "react";

const CookieSelector = ({ prop }) => {
  const [amount, setAmount] = useState(0);
  const enterValue = () => {
    setAmount(1);
  };
  return (
    <>
      <select className="margin-top" name={prop} id={prop}>
        <option value="zero">0 dz</option>
        <option value="one">1 dz</option>
        <option value="two">2 dz</option>
        <option value="three">3 dz</option>
        <option value="four">4 dz</option>
        <option onClick={enterValue} value="other">
          other
        </option>
      </select>
      {amount === 1 ? <input /> : ""}
    </>
  );
};

export default CookieSelector;
