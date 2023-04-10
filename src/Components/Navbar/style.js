import styled from 'styled-components';

const Container = styled.div`
.nav_link{
    text-decoration: none;
    font-weight: 500;
    font-size: 22px;
}

.nav_icon{
    font-size: 24px;
}
`;
const Wrapper = styled.div``;

const NavItems = styled.ul`
display: flex;
align-items:center;
gap:20px;
`

const NavItem = styled.li`
list-style-type:none;
`
const Icons = styled.div`
display: flex;
align-items:center;
gap: 20px;
`

const Input = styled.input`
width: 100%;
height:40px;
outline:none;
padding: 0 30px;
font-size:20px
`

export { Container, Input, Wrapper, Icons, NavItem, NavItems };
