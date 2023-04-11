import styled from 'styled-components';

const Container = styled.div`
max-width: 1550px;
display: flex;
width: 100%;
margin: 0 auto;


`;
const Img = styled.img`
width: 200px;
height: 100px;
flex-wrap: wrap;
margin: 0 auto;

:hover{
    transform: scale(0.95);
}

`;
const LogoWrapper = styled.div`
    margin: 50px 100px 0 100px;
`

export { Container, LogoWrapper, Img };
