import React from 'react'
import * as S from './styles'
import { Header } from 'next/dist/lib/load-custom-routes'

const Header = ( { children, background, page }: Header.Props): React.ReactElement => {
  return (
    <S.Container background={ background } page={ page }>
      <S.Content>
        { children }
      </S.Content>
    </S.Container>
  )
}

namespace Header {
  export interface Props {
    children: React.ReactNode
    background: string
    page: 'home' | 'restaurant'
  }
}
export { Header }