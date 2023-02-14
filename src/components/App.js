import React, { useEffect, useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [isClicked, setIsClicked] = useState(true);
  const [className, setClassName] = useState('redColor');

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  useEffect(()=>{
   if(value){
    setClassName('redColor')
   }
   if(!value){
    setClassName('blueColor')
   }
  }, [value]);
 

  return (
    <div id="main">
      <p className={className}>Newton School</p>
      <button id='button' onClick={handleClick}>Change Style</button>
    </div>
  );
};

export default App;
