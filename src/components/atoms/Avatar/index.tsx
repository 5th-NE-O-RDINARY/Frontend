import { View, Text, Image } from "react-native"
import { styled } from "styled-components"
import { Button } from "../Button"
import avatar from "@assets/image/avatar.png"

type AvatarVariantType = 'default' | 'going' | 'arrived' | 'late'

const getButtonTextAndColor = (variant: AvatarVariantType) => {
    if (variant === 'going') {
        return { text: '가는 중', color: '#0075FF' }
    } else if (variant === 'late') {
        return { text: '5분 지각', color: '#FF0000' }
    } else {
        return { text: '도착 완료', color: '#CACACA' }
    }
}

const Avatar = ({ variant, name }: { variant: AvatarVariantType, name: string }) => {
    const { text, color } = getButtonTextAndColor(variant)

    return (
        <View>
            <Flex variant={variant}>
                <ImageWrapper>
                    <Image source={avatar} />
                </ImageWrapper>
                <StyledText>{name}</StyledText>
            </Flex>
            {variant !== 'default' && <Button variant="short" color={color}>{text}</Button>}
        </View>
    )
}

export default Avatar

const Flex = styled(View)<{ variant: AvatarVariantType }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${({ variant }) => variant === 'default' ? '0px' : '8px'};
`

const ImageWrapper = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FABCA6;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: 8px;
`

const StyledText = styled(Text)`
    font-size: 10px;
    font-weight: 400;
    letter-spacing: -0.2px;
`