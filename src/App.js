import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { transparencyConverter, rgbaConverter } from 'utils';
import './App.css';

const App = () => {
  const [hexValue, setHexValue] = useState(null);
  const { register, handleSubmit } = useForm({
    mode: 'onChange'
  });

  const onSubmit = data => {
    try {
      const { transparency } = data;
      if (transparency.indexOf('rgba') !== -1) {
        setHexValue(rgbaConverter(transparency));
      } else {
        setHexValue(transparencyConverter(transparency));
      }
    } catch (error) {
      console.error('error=>', error);
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='App-title'>Hexadecimal color code for opacity</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className='App-input'
            placeholder='Between 0 - 100 or rgba(0, 0, 0, 0.80) or rgba(0, 0, 0, .80)'
            name='transparency'
            type='text'
            ref={register({ required: true })}
          />
          <button className='App-button' type='submit'>
            <strong>Convert</strong>
          </button>
        </form>
        {hexValue && (
          <div className='App-value'>
            <div className='App-text'>{hexValue}</div>
            <div className='App-text'>
              {hexValue.length === 2 && (
                <small>
                  Example: #000000{hexValue} || #ffffff{hexValue} || #ff0050{hexValue}
                </small>
              )}
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
