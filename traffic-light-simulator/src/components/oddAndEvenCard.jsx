import React, { useState } from 'react';

const OddAndEvenCard = () => {
  const [num1, setNum1] = useState(0);


  const compareNumbers = () => {
    return num1 %2;
  };

  return (
    <div className="w3-card-4 w3-margin w3-green w3-round-large" style={{width:"20%"}}>
      <div className="w3-container w3-blue w3-padding">
        <h3>Is this number odd or even?</h3>
        <div className="w3-section">
          <label>Number 1:</label>
          <input
            type="number"
            className="w3-input w3-border"
            value={num1}
            onChange={(e) => setNum1(parseInt(e.target.value))}
          />
        </div>

      </div>

      <div className="w3-container w3-padding">
        <h3>Output</h3>
        <p className="w3-large">The number is: {compareNumbers()?"Odd":"Even"}</p>
      </div>
    </div>
  );
};

export default OddAndEvenCard;