import { Typography } from '../../atoms/Typography'
import React from 'react'
import * as S from './styles'

const Header = (): React.ReactElement => {
  return (
    <S.Container>
      <S.Content>
        {/* Logo não será aplicado no projeto */}
        <Typography
          as="h1"
          color="dark-down"
        >
          Descubra novos sabores
        </Typography>
        <Typography>
          Aqui eu converso com você sobre nossa proposta
        </Typography>
      </S.Content>
    </S.Container>
  )
}

export { Header }