// DateInput.js
import React, { useState } from 'react';

function DateInput({ onCalculate }) {
  const [birthdate, setBirthdate] = useState('');

  const handleInputChange = (e) => {
    setBirthdate(e.target.value);
  };

  const handleCalculate = () => {
    onCalculate(birthdate);
  };

  return (
    <div>
      <input
        type="date"
        value={birthdate}
        onChange={handleInputChange}
      />
      <button onClick={handleCalculate}>Calculate Age</button>
    </div>
  );
}

export default DateInput;
