import React from 'react';
import styles from './Button.module.css';

type MyButtonProps = {
  text: string;
  onClick: () => void;
};

const MyButton: React.FC<MyButtonProps> = ({ text, onClick }) => {
  return <button className={styles.button} onClick={onClick}>{text} 🎉</button>;
};

export default MyButton;
