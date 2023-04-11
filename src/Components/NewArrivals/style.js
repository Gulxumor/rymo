import styled from 'styled-components';

const Title = styled.p`
    text-align: center;
`
const Header = styled.p`
    text-align: center;
    font-weight: ${({ h }) => h ? "700" : ""};
    font-size: ${({ h }) => h ? "1.8rem" : ""};
    margin: ${({ h }) => h ? "" : "20px 0"};
`
const ImageWrapper = styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;
`
const Container = styled.div`
max-width: 1440px;
width: 100%;
margin:50px  auto;
display: flex;
`;
const Wrapper = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
`;

// ==========================================Card=====================================


export const CardImg = styled.img`
width: 280px;
height: ${({ small }) => small ? '280px' : '315px'};
margin-right:20px ;
`
export const BtnWrapper = styled.p`
display: none;
`
export const CardContainer = styled.div`
width: 280px;
height: 520px;
&:hover ${CardImg} {
    opacity:0.7;
}
&:hover ${BtnWrapper} {
    display: flex;
}
`
export const CardWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
padding: 20px 0;
`
export const Text = styled.h4`
padding: 10px 0;
`




export { Container, Title, Wrapper, Header, ImageWrapper };
