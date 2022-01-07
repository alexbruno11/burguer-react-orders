import styled from "styled-components";

export const Container = styled.div` 


background: black;


display: flex;
width: 450px;
margin: 0 auto;
flex-direction: column;
align-items: center;
margin-top: 25px;
margin-bottom: 30px;
height: 100%;
min-height: 90vh;



 `;

export const Img = styled.img` 

margin-top: 30px;



 `;

export const Order = styled.li`
display: flex;

align-items: center;
justify-content: space-between;
margin-top: 20px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
outline: none;
width: 342px;
height: 101px;
padding-left: 25px;




button {

    background: none;
    border: none;
    cursor: pointer;
    padding-right: 10px;
    padding-top: 12px;

}

`
export const OrderDiv = styled.div` 

  display: flex;
  flex-direction: column;
  margin-left: 20px;


 `;

export const OrderType= styled.p` 

  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 25px;
  color: #ffffff;
  
 `;


export const OrderName= styled.p` 

  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;

 `;














