import styled from 'styled-components';
import Bg from "../../assets/images/banner/2.jpg"

const Container = styled.div`
width: 100%;
height: 60vh;
background-size:cover;
background-position:center;
background-image: url(${Bg});
background-attachment: fixed;
color: var(--white);
`;
const Wrapper = styled.div`
    width:100%;
    /* height: calc(100vh - 20px); */
    height: 50vh;
    max-width: 1440px;
    margin: auto;
    padding: 0px 131px;
    display: flex;
    flex-direction:column;
    justify-content:center;
`;

const Title = styled.h1`
    padding: 15px 0;
`;
const Text = styled.p`
    max-width: 380px;
    padding-bottom:15px;
`

export { Container, Text, Title, Wrapper };
