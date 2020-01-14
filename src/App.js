import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [value, setValue] = useState('');
  const [hexValue, setHexValue] = useState(null);

  const percentToHex = p => {
    if (p > 100 || p < 0) {
      p = 100;
    }

    const intValue = Math.round((p / 100) * 255);
    const hex = intValue.toString(16);
    return hex.padStart(2, '0').toUpperCase();
  };

  const handleSubmit = e => {
    e.preventDefault();
    setHexValue(percentToHex(value));
    setValue('');
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <form onSubmit={e => handleSubmit(e)}>
          <input
            min='0'
            max='100'
            step='1'
            className='App-input'
            value={value}
            placeholder='0-100'
            onChange={event => {
              setValue(event.target.value);
            }}
          />
          <button className='App-button' type='submit'>
            Convert To Hex
          </button>
        </form>
        {hexValue && <div className='App-value'>{hexValue}</div>}
      </header>
    </div>
  );
};

export default App;
