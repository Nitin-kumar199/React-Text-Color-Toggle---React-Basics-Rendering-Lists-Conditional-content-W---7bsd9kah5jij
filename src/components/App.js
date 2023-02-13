import React, { useEffect, useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    const pTag = document.querySelector('#main p');
    if (isClicked) {
      pTag.style.color = 'blue';
      pTag.style.fontSize = '30px';
      pTag.style.fontStyle = 'italic';
    } else {
      pTag.style.color = 'red';
      pTag.style.fontSize = '30px';
      pTag.style.fontStyle = 'normal';
    }
  }, [isClicked]);

  return (
    <div id="main">
      <p className="title">Newton School</p>
      <button id='button' onClick={handleClick}>Change Style</button>
    </div>
  );
};

export default App;
