// App.js
import React, { useState } from 'react';
import DateInput from './components/DateInput';

function App() {
  const [age, setAge] = useState(null);

  const calculateAge = (birthdate) => {
    // Calculate the age from the birthdate
    const birthDate = new Date(birthdate);
    const today = new Date();
    const ageInMilliseconds = today - birthDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);
    setAge(Math.floor(ageInYears));
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <h3>Made By:  Anjali Kolhatkar Reg No 21BCE11171</h3>
      <DateInput onCalculate={calculateAge} />
      {age !== null && <p>Your age is: {age} years</p>}
    </div>
  );
}

export default App;
