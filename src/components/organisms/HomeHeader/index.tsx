import { Typography } from '../../atoms/Typography'
import React from 'react'
import * as S from './styles'
import { Header } from '../../molecules/Header'
import bg from '../../../assets/images/background-image.png'

const HomeHeader = (): React.ReactElement => {
  return (
    <Header background={ bg.src } page="home">
      <S.Container>
        <Typography
          as="h1"
          color="dark-down"
        >
          Descubra novos sabores
        </Typography>
        <Typography>
          Aqui eu converso com você sobre nossa proposta
        </Typography>
      </S.Container>
    </Header>
  )
}

export { HomeHeader }