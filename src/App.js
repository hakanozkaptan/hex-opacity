import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { hexConverter } from 'utils';
import './App.css';

const App = () => {
  const [hexValue, setHexValue] = useState(null);

  const { register, handleSubmit } = useForm({
    mode: 'onChange'
  });

  const onSubmit = data => {
    try {
      setHexValue(hexConverter(data.transparency));
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
            placeholder='Between 0 - 100'
            name='transparency'
            type='number'
            ref={register({ required: true, min: 0, max: 100 })}
          />
          <button className='App-button' type='submit'>
            <strong>Convert</strong>
          </button>
        </form>
        {hexValue && <div className='App-value'>{hexValue}</div>}
        {hexValue && (
          <div className='App-value'>
            <small>
              Example: #000000{hexValue} || #ffffff{hexValue} || #ff0050{hexValue}
            </small>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
