import styled from 'styled-components';

const Container = styled.div`
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
    max-width: 1440px;
    margin:50px auto 0 auto;
`

export { Container, LogoWrapper, Img };
