import styled from 'styled-components';
import Bg from "../../../../assets/images/banner/2.jpg"

const Container = styled.div`
width: 100%;
height: 60vh;
background-size:cover;
background-position:center;
background-image: url(${Bg});
background-attachment: fixed;
color: var(--white);

  @media (max-width: 1339px) {
    height: 50vh;
  }

  @media (max-width: 884px) {
    height: 40vh;
  }

  @media (max-width: 676px) {
    height: 35vh;
  }
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

      @media (max-width: 1339px) {
    padding: 0 30px;
  }

  @media (max-width: 884px) {
    padding: 0 20px;
  }

  @media (max-width: 676px) {
    padding: 0 10px;
  }
`;

const Title = styled.h1`
    width: 450px;
    height: 125px;
    font-weight: 900;
    padding: 15px 0;
    font-size: 42px;
    margin-bottom: 30px;

    
  @media (max-width: 884px) {
    font-size: 36px;
    max-width: 400px;

  }

  @media (max-width: 676px) {
    font-weight: 800;
    font-size: 30px;
    max-width: 320px;
  }

  @media (max-width: 428px) {
    font-weight: 700;
    font-size: 27px;
    max-width: 300px;
  }
`;
const Text = styled.p`
    font-size: 22px;
    font-weight: 600;
    height: 33px;
    width: 825px;

      @media (max-width: 884px) {
    font-size: 20px;
  }

  @media (max-width: 676px) {
    font-size: 18px;
  }
  @media (max-width: 428px) {
    font-weight: 500;
    font-size: 16px;
  }
`

export { Container, Text, Title, Wrapper };
