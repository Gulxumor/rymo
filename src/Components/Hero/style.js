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

const TopText = styled.h4``;
const Title = styled.h1`
    padding: 15px 0;
`;
const Span = styled.span`
    color: var(--orange);
`;
const Text = styled.p`
    max-width: 380px;
    padding-bottom:15px ;
`

export { Container, Text, Span, Title, TopText, Wrapper };
