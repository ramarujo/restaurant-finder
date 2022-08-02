import { Input } from '../../atoms/Input'
import React from 'react'
import * as S from './styles'
import SearchIcon from '../../../assets/images/search.svg'

const Filter = (): React.ReactElement => {
  return (
    <S.Container>
      <Input
        icon={ SearchIcon.src }
        placeholderText="Encontre um restaurante"
      />
    </S.Container>
  )
}

export { Filter }