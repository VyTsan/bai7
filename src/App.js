import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import styled from "styled-components";

function App() {
  const handleClick = () => {
    alert('OK');
  }
  return (
    <SApp>
      <Input/>
      <Button text='OK' color='#ff9367' onClick={handleClick}/>
      <br/>
      <Input width='300px' color='#f2d08a'/>
      <Input width='500px' color='#e9f0f0'/>
      <Input width='200px' height='100px'/>
      <Input width='100px' height='20px'/>
      
    </SApp>
  );
}

export default App;

const SApp = styled.div`
  * {
    box-sizing: border-box;
  }
`;