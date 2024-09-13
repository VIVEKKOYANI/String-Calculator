// src/components/StringCalculator.js
import React, { useState } from "react";
import { add } from "../utils/addFunction";

function StringCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
    setError(null); // Clear error on input change
  };

  const handleCalculate = () => {
    try {
      const calculationResult = add(input);
      setResult(calculationResult);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter numbers"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <p>Result: {result}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default StringCalculator;