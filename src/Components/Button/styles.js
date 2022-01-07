import styled from "styled-components";

export const Button = styled.button`

margin-top: ${props => props.isBack ? '200px' : '76px'} ;
margin-bottom: 51px;

width: 342px;
height: 74px;
left: 35px;
font-size:17px;
line-height:28px;
color: white;
background: ${props => props.isBack ? 'rgba(255, 255, 255, 0.14)' : '#D93856;'} ;
border-radius: 14px;
outline: none;
border:  ${props => props.isBack ? '1px solid transparent' : 'none'} ;
cursor: pointer;
display: flex;
justify-content: center;
gap: 20px;
align-items: center;
&:hover {

    opacity: 0.8;
    
}

&:active {

    opacity: 0.5;

}


    

`;





