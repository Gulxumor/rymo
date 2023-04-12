import styled from 'styled-components';
export const Container = styled.div`
width: 100%;
margin: 80px  500px;
`;
export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 24px;
margin: auto;
position: absolute;
border: 2px solid black;
border-radius: 18px;

#button{
    width: 400px;
    display: block;
}
`
export const Text = styled.h1`
padding-top: 20px;
font-family: cursive;
text-align: center;
`
export const Title = styled.p`
font-size: 20px;
padding-bottom: 5px;
font-family: cursive;
padding-left: 20px;
`
export const Input = styled.input`
width: 400px;
height: 30px;
font-size: 20px;
padding: 20px;
margin:0 20px 10px;
border-radius: 10px;
outline: none;
border: 1px solid black;

:focus{
    background-color: black;
    color: white;
}

`
export const Button = styled.button`
margin:20px 0;
width: 100%;
`
