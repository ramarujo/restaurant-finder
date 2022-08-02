import styled from 'styled-components'
import bg from '../../../assets/images/background-image.png'
import { theme } from '../../../styles/theme'

const Container = styled.header`
  height: 313px;
  background: url(${ bg.src });
  background-repeat: no-repeat;
  background-size: 1080px;
  background-position: center -150px;

  /* transform: scaleX(-1); */
  /* temporario */
  @media(min-width: ${ theme.mediaQuery.desktop }) {
    background-size: cover;
    background-position: center;
    height: 375px;
  }
`

const Content = styled.div`
  display: flex;

  flex-direction: column;
  padding: 30px;

  h1 {
    max-width: 230px;
    margin: 10px 0 20px;
  } 

  @media(min-width: 1080px) {
    width: 1080px;
    margin: auto;
    align-items: flex-end;
    text-align: end;
    h1 {
      max-width: 100%;
      margin: 10px 0 6px;
    }
    span {
      max-width: 350px;
    }
  }
`

export { Container, Content }