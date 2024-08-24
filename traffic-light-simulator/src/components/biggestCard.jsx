import React, { useState } from 'react';

const BiggestCard = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const compareNumbers = () => {
    return num1 > num2 ? num1 : num2;
  };

  return (
    <div className="w3-card-4 w3-margin w3-green w3-round-large" style={{width:"20%"}}>
      <div className="w3-container w3-blue w3-padding">
        <h3>Find the bigger number</h3>
        <div className="w3-section">
          <label>Number 1:</label>
          <input
            type="number"
            className="w3-input w3-border"
            value={num1}
            onChange={(e) => setNum1(parseInt(e.target.value))}
          />
        </div>
        <div className="w3-section">
          <label>Number 2:</label>
          <input
            type="number"
            className="w3-input w3-border"
            value={num2}
            onChange={(e) => setNum2(parseInt(e.target.value))}
          />
        </div>
      </div>

      <div className="w3-container w3-padding">
        <h3>Output</h3>
        <p className="w3-large">The larger number is: {compareNumbers()}</p>
      </div>
    </div>
  );
};

export default BiggestCard;