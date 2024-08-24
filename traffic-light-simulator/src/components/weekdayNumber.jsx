import React, { useState } from 'react';

const WeekdayNumber = () => {
  const [num1, setNum1] = useState(0);


  const compareNumbers = () => {

    if(num1===1) return "Monday";
    else if(num1===2) return "Tuesday";
    else if(num1===3) return "Wednesday";
    else if(num1===4) return "Thursday";
    else if(num1===5) return "Friday";
    else if(num1===6) return "Saturday";
    else if(num1===7) return "Sunday";
    else return "** Error: Number out of weekday range";
  };

  return (
    <div className="w3-card-4 w3-margin w3-green w3-round-large" style={{width:"20%"}}>
      <div className="w3-container w3-blue w3-padding">
        <h3>What day of the week is this number?</h3>
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
        <p className="w3-large">This number represents: {compareNumbers()}</p>
      </div>
    </div>
  );
};

export default WeekdayNumber;