import styled, { css }from "styled-components"
import { theme } from "../../../styles/theme"

const Input = styled.input`
  width: 100%;
  background: ${ theme.colors.white };
  padding: 15px 50px;
  border: 1px solid ${ theme.colors["light-medium"] };
  border-radius: 8px;
  outline-color: ${ theme.colors.primary };
  font-size: ${ theme.fontSize.paragraph };
  height: 100%;
`

const Label = styled.label<Label.Props>`
  position: relative;

  :before {
    content: "";
    position: absolute;
    left: 20px;
    bottom: 0;
    width: 20px;
    height: 20px;
    ${props => props.icon && css`
      background: url("${ props.icon }") center / contain no-repeat;
    `}
  }
`

namespace Label {
  export interface Props {
    icon: string
  }
}


export { Input, Label }