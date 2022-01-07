import React, {useState, useRef} from "react";
import Logo from '../../assets/logoOne.png';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

// componentes
import H1 from '../../Components/Title/index'

import Button from '../../Components/Button/index'

import InputLabel from "../../Components/Input-Label";

import {Container,Img,Input,}from "./styles";


const App = () => {

  
  
  const [users, setUsers] =useState ([]);
  const inputName = useRef()
  const inputOrder = useRef()
  
  const navigate  =useNavigate()

   async function addNewOrder() {
    
   const {data: newUsers1} =  await axios.post(
     
    "http://localhost:3001/orders",
    {
     
     order:        inputOrder.current.value,  
     clientName:   inputName.current.value,
     
    
    })
   
    setUsers ([...users, newUsers1] );

    navigate('/orders')


  }


  return (

    <Container>

      <Img alt="logo" src={Logo} />

    

        <H1>Request your order!</H1>

        <InputLabel>Order</InputLabel>

        <Input  ref={inputOrder} placeholder= "Type your order"></Input>

        
        <InputLabel  alignClient={true} >Client Name</InputLabel>

        <Input ref={inputName}   placeholder= "Type your name"></Input>

      
        <Button onClick = {addNewOrder} >
          Register
        </Button>

       


    </Container>)
};

export default App;