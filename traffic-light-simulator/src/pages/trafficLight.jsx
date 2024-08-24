import React, { useState } from 'react';

export default function TrafficLight() {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="traffic-light-container" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}}>
     
      <div className="traffic-light" style={{ width: '100px', height: '300px', backgroundColor: 'black', border: '10px solid darkgray', borderRadius: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center',marginBottom:"10%",padding:"50px" }}>
        <div className="circle green" onClick={() => handleColorChange('green')} style={{ width: '80px', height: '80px', borderRadius: '50%', cursor: 'pointer', opacity: selectedColor === 'green' ? 1 : 0.2, backgroundColor: 'green' }} />
        <div className="circle orange" onClick={() => handleColorChange('orange')} style={{ width: '80px', height: '80px', borderRadius: '50%', cursor: 'pointer', opacity: selectedColor === 'orange' ? 1 : 0.2, backgroundColor: 'orange' }} />
        <div className="circle red" onClick={() => handleColorChange('red')} style={{ width: '80px', height: '80px', borderRadius: '50%', cursor: 'pointer', opacity: selectedColor === 'red' ? 1 : 0.2, backgroundColor: 'red' }} />
      </div>

      <div className="input-container">
        <input type="radio" name="color" value="green" checked={selectedColor === 'green'} onChange={() => handleColorChange('green')} /> Green
        <input type="radio" name="color" value="orange" checked={selectedColor === 'orange'} onChange={() => handleColorChange('orange')} /> Orange
        <input type="radio" name="color" value="red" checked={selectedColor === 'red'} onChange={() => handleColorChange('red')} /> Red
      </div>

    </div>
  );
}
