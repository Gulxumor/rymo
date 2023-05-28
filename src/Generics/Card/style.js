import styled from "styled-components";

const Container = styled.div`
  button {
    opacity: 0;
  }
  :hover {
    button {
      opacity: 1;
    }
    
    img {
      opacity: 0.8;
    }
  }

`

Container.Wrapper = styled.div`
  max-width: 400px;
  width: 100%;
`

const ImageWrapper = styled.div`
  width: 100%;
`

ImageWrapper.Image = styled.img`
  width: 100%;
`

Container.Wrapper.Content = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

const Title = styled.h4`
  font-weight: 500;
`

const Price = styled.h4`
  font-weight: 600;
`



export { Container, ImageWrapper, Title, Price }