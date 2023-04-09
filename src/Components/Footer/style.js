import styled from 'styled-components';
const Div = styled.div``
const Img = styled.img`
    width:${({ w }) => w ? "159px" : "145px"};
    height:${({ w }) => w ? "29px" : "60px"};
`;
const Container = styled.div`
    max-width: 1550px;
    width: 100%;
    background-color: #212121;
    height: 540px; 
    text-transform:uppercase;

    .div{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
`;
const Wrapper = styled.div`
    height: 540px;
    margin: auto;
    padding: 50px 131px 0 131px;
    display: flex;
    flex-direction:column;
`;
const Top = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
    gap: 50px;
`;
const Bottom = styled.div`
    margin-top:50px ;
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 0 20px;
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
export { Container, Wrapper, Div, Top, Bottom, Text, Img, Imgs, Title };