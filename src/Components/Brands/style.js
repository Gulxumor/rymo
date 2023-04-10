import styled from 'styled-components';

const Container = styled.div`
max-width: 1550px;
display: flex;
width: 100%;
border: 2px solid red;
margin: 0 auto;


`;
const Img = styled.img`
width: 180px;
height: 100px;
flex-wrap: wrap;
margin: 0 auto;

:hover{
    transform: scale(0.95);
}

`;

export { Container, Img };
