import styled from 'styled-components';
const Div = styled.div``
const Img = styled.img`
    width:${({ w }) => w ? "159px" : "145px"};
    height:${({ w }) => w ? "29px" : "60px"};
`;
const Container = styled.div`
    width: 100vw;
    background-color: #212121;
    height: 540px; 
    text-transform: uppercase;
    /* margin: 10px auto 0 auto; */
    
    .div{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
`;
const Wrapper = styled.div`
    max-width: 1440px;
    width:100%;
    margin: 0 auto;
    padding: 50px 131px 0 131px;
    display: flex;
    flex-direction:column;

  @media (max-width: 1339px) {
    padding: 50px 30px;
  }

  @media (max-width: 884px) {
    padding: 40px 20px;
    grid-template-columns: 1.5fr 1fr 1fr;
  }

  @media (max-width: 676px) {
    padding: 30px 20px;
    grid-template-columns: 1.5fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }


`;
const Top = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
    gap: 50px;
`;
const Bottom = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 60px 131px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1339px) {
    padding: 50px 30px;
  }

  @media (max-width: 884px) {
    padding: 30px 20px;
    grid-template-columns: 1.5fr 1fr 1fr;
  }

  @media (max-width: 676px) {
    padding: 20px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;
const Text = styled.li`
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: var(--gray);
`;
const Title = styled.ul`
    margin-bottom:${({ m }) => m ? "25px" : "0"};
    color: var(--white);
    font-size: 1.1rem;
    font-weight: 600;
`;
const Imgs = styled.img`
    display:grid;
    grid-template-rows:1fr 1fr 1fr;
    gap:10px;
    max-width: 100px;
    width: 100%;
`;

const InstagramImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  display: grid;
        grid-template-columns: 1fr 1fr 1fr;
   
`

export { Container, InstagramImages, Wrapper, Div, Top, Bottom, Text, Img, Imgs, Title };