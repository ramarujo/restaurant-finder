import { theme } from "../styles/theme"

export type Element = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'span'

export type Attributes = {
  sizeDesktop: keyof typeof theme.fontSize
  sizeMobile: keyof typeof theme.fontSize
  weight: keyof typeof theme.fontWeight
}

const defaultStyle: Record<Element, Attributes> = {
  "h1": {
    "sizeDesktop": "heading-1",
    "sizeMobile": "heading-2",
    "weight": "bold"
  },
  "h2": {
    "sizeDesktop": "heading-2",
    "sizeMobile": "heading-5",
    "weight": "bold"
  },
  "h3": {
    "sizeDesktop": "heading-1",
    "sizeMobile": "heading-3",
    "weight": "bold"
  },
  "h4": {
    "sizeDesktop": "paragraph",
    "sizeMobile": "heading-5",
    "weight": "bold"
  },
  "p": {
    "sizeDesktop": "paragraph",
    "sizeMobile": "paragraph",
    "weight": "normal"
  }, 
  "small": {
    "sizeDesktop": "small",
    "sizeMobile": "paragraph",
    "weight": "normal"
  },
  "span": {
    "sizeDesktop": "lead",
    "sizeMobile": "lead",
    "weight": "normal"
  }
}

export default defaultStyle