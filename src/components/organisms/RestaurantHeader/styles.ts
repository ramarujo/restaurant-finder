import styled from 'styled-components'
import { theme } from '../../../styles/theme'
import arrow from '../../../assets/images/arrow-left.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(min-width: ${ theme.mediaQuery.desktop }) {
    flex-direction: row;
    margin: 40px 0 28px;
    align-self: center;
  }

  a {
    display: none;
    @media(min-width: ${ theme.mediaQuery.desktop }) {
      display: block;
      position: relative;
      left: -195px;
      top: -50px;
      text-decoration: none;
      color: ${ theme.colors.white };
      :before {
        content: "";
        position: absolute;
        left: -25px;
        top: -4px;
        width: 20px;
        height: 20px;
        background: url("${ arrow.src }") center / contain no-repeat;
      }
    }
  }
`

const Information = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  bottom: -1px;
  background-color: ${theme.colors.white};
  border-radius: 32px 32px 0 0;
  padding: 46px 0 0;
  @media(min-width: ${ theme.mediaQuery.desktop }) {
    background: transparent;
    padding: 0;
    text-align: left;
    margin-left: 24px;
    h1 {
      color: ${ theme.colors.white };
    }
    h1, p {
      margin: 2.5px 0;
    }
  }
`
const Contact = styled.div`
  display: none;
  @media(min-width: ${ theme.mediaQuery.desktop }) {
    display: block;
  }
`

const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: relative;
  top: 32px;
  z-index: 2;
  @media(min-width: ${ theme.mediaQuery.desktop }) {
    position: initial;
  }
`

export { Container, Contact, Information, Image }