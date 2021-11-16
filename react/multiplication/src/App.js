import React, {useState} from 'react';
import Button from './Button';
import Layout from './Layout';
import Figure from './Figure';

function App() {
  const [number,setNumber]=useState(1);
  
  function onClickIncrease(){
    setNumber(number+1);
  }
  function onClickDecrease(){
    setNumber(number-1);
  }
  function onClickMultiplyByTwo(){
    setNumber(number*2);
  }
  return (
    <Layout>
      <Figure num1={number} num2="1"></Figure>
      <Figure num1={number} num2="2"></Figure>
      <Figure num1={number} num2="3"></Figure>
      <Figure num1={number} num2="4"></Figure>
      <Figure num1={number} num2="5"></Figure>
      <Figure num1={number} num2="6"></Figure>
      <Figure num1={number} num2="7"></Figure>
      <Figure num1={number} num2="8"></Figure>
      <Figure num1={number} num2="9"></Figure>
      <Button onClick={onClickIncrease} text="+1" />
      <Button onClick={onClickDecrease} text="-1" />
      <Button onClick={onClickMultiplyByTwo} text="*2" />
    </Layout>
  );
}

export default App;
