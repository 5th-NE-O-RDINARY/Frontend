import { TextType, theme } from "@/styles/theme/theme"
import { HTMLAttributes } from "react"
import { Text } from "react-native"
import styled from "styled-components"

/**
 * @param typo Typo theme 선택
 * @param color Palette theme 선택
 */

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  typo: TextType['typo']
  color?: TextType['color']
  children: any
}

export type TextPropsKey = 'typo' | 'color'

export const CustomText = styled(Text)<{
  typoKey: TextType['typo']
  colorKey?: TextType['color']
}>`
  white-space: pre-wrap;
  ${({ typoKey }) => theme.typo[typoKey]};
  color: ${({ colorKey }) => {
    return colorKey && theme.palette[colorKey]
  }};
`
