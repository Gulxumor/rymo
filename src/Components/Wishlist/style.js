import styled from "styled-components";
import { ReactComponent as heart } from '../../assets/icons/heart.svg'
import { ReactComponent as heartred } from '../../assets/icons/heart-red.svg'

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
`

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 60px 131px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1339px) {
    padding: 50px 30px;
  }

  @media (max-width: 884px) {
    padding: 40px 20px;
  }

  @media (max-width: 676px) {
    padding: 30px 20px;
  }

  @media (max-width: 676px) {
    padding: 30px 20px;
  }
`

const Title = styled.h2`
  text-align: left;
  font-weight: 700;
`

const Description = styled.p`
  text-align: left;
`

const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-top: 10px;

  @media (max-width: 884px) {
    grid-template-columns: repeat(3, 1fr);

  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
`

const Icons = styled.div``

Icons.Heart = styled(heart)``
Icons.HeartRed = styled(heartred)``


export { Container, Wrapper, Icons, Title, Description, Products }