import React, { useState } from 'react';
import MyButton from './Components/Button';
import styles from './App.module.css';
import Confetti from 'react-confetti';

const App: React.FC = () => {
  const [confetti, setConfetti] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleClick = () => {
    console.log('Button clicked!');
    setConfetti(true);
    setBackgroundColor('#def7f7');

    setTimeout(() => {
      setConfetti(false);
      setBackgroundColor('white');
    }, 7000);
  };

  return (
    <div className={styles.container} style={{ backgroundColor: backgroundColor }}>
      {confetti && <Confetti />}
      <MyButton text="Click Me" onClick={handleClick} />
    </div>
  );
};

export default App;
