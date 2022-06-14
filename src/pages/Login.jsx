import React from 'react'
import styled from "styled-components";

const Container = styled.div` 
        width: 100vw;
        height: 100vh;
        background: linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)
        ),
        url("https://images.pexels.com/photos/11106868/pexels-photo-11106868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 ")
            center;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
`;

const Wrapper = styled.div` 
        width: 40%;
        padding: 20px;
        background-color: white;
 `;

 const Form = styled.form` 
    display: flex;
    flex-wrap: wrap;
 `;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
 `;
const Input = styled.input` 
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
 `;
const Button = styled.button` 
    width: 30%;
    border: none;
    padding: 15px 20px;
   
    background-color: teal;
    color: white;
    cursor: pointer;
`;
const Link = styled.a` 
 padding : 10px 10px;
`;
const Login  = () => {
  return (
    <Container><Wrapper> 
        <Title>
            SIGN IN
        </Title>
        <Form>
            
            <Input placeholder= " Username"/>
             <Input placeholder= " Email"/>
             <Input placeholder= "Password"/>
             <Input placeholder= "Confirm password"/>

           
             <Button>LOGIN</Button>

             <Link>Forgot Password? </Link>
             <Link>Create a new account</Link>
             

        </Form>

        </Wrapper> </Container>
  )
}

export default Login