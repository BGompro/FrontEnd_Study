import {useState} from 'react';
import styles from './App.module.css'
function App() {
  const [number,setNumber]=useState(0);

  function onClick1(){
    setNumber(number+1);
  }
  function onClick2(){
    setNumber(number-1);
  }
  function onClick3(){
    setNumber(number*2);
  }
  function onClick4(){
    setNumber(number**2);
  }

  return (
    <div>
      <div>값 : {number}</div>
      <button className={styles.red} onClick={onClick1}>+1</button>
      <button className={styles.tomato} onClick={onClick2}>-1</button>
      <button className={styles.pink} onClick={onClick3}>*2</button>
      <button className={styles.blue} onClick={onClick4}>^2</button> 
    </div>
  );
}

export default App;
