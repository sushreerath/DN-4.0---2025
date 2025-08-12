import React, { useState } from "react";

function CurrencyConverter() {
  const [rupees, setRupees] = useState("");
  const [euros, setEuros] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example conversion rate: 1 Euro = 90 Rupees
    const conversionRate = 90;
    const euroValue = (rupees / conversionRate).toFixed(2);
    setEuros(euroValue);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <label>Rupees (₹): </label>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          required
        />
        <button type="submit">Convert</button>
      </form>

      {euros && (
        <p>
          ₹{rupees} = <strong>€{euros}</strong>
        </p>
      )}
    </div>
  );
}

export default CurrencyConverter;
