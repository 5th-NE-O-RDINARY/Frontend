import { View } from "react-native"
import { styled } from "styled-components"
import Promise from "./Promise"

const PromiseListItem = () => {
  return (
    <StyledView>
      <Promise />
    </StyledView>
  )
}

export default PromiseListItem

const StyledView = styled(View)`
  border: 1px solid blue;
  width: 100%;
  heigth: fit-content;
`