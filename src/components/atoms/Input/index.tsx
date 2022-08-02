import React from 'react'
import * as S from './styles'

const Input = ( { icon, onChange, placeholderText, value  }: Input.Props ): React.ReactElement => {
  return (
    <S.Label icon={ icon }> 
      <S.Input
        onChange={ onChange }
        placeholder={ placeholderText }
        value={ value }
      /> 
    </S.Label>
  )
}
namespace Input {
  export interface Props {
    icon?: any
    onChange?: () => {}
    placeholderText?: string
    value?: string | number
  }
}
export { Input }
