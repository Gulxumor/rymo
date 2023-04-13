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
    max-width: 1440px;
    width:100%;
    /* height: calc(100vh - 20px); */
    height: 50vh;
    margin: auto;
    padding: 0px 131px;
    display: flex;
    flex-direction:column;
    justify-content:center;
`;

const Title = styled.h1`
    width: 450px;
    height: 125px;
    font-weight: 900;
    padding: 15px 0;
    font-size: 42px;
    margin-bottom: 30px;
`;
const Text = styled.p`
    font-size: 22px;
    font-weight: 600;
    height: 33px;
    width: 825px;
`

export { Container, Text, Title, Wrapper };
