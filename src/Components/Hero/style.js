import styled from 'styled-components';
import Bg from "../../assets/images/banner/1.jpg"

const Container = styled.div`
width: 100%;
/* height: calc(100vh - 0px); */
height: 100vh;
background-size:cover;
background-position:center;
background-image: url(${Bg});
background-attachment: fixed;
`;
const Wrapper = styled.div`
    width:100%;
    height: calc(100vh - 0px);
    max-width: 1440px;
    margin: auto;
    padding: 0px 131px;
    display: flex;
    flex-direction:column;
    justify-content:center;
`;

const TopText = styled.h4`
    font-size: 1.1rem;
    font-weight: 600;
    height: 26px;
    width: 835px;
`;
const Title = styled.h1`
    padding: 15px 0;
    font-weight: 900;
    font-size: 40px;
    height: 60px;
    width: 835px;

`;
const Span = styled.span`
    color: var(--orange);
`;
const Text = styled.p`
    height: 48px;
    max-width: 380px;
    margin:15px 0 ;

`

export { Container, Text, Span, Title, TopText, Wrapper };
