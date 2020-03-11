import styled from 'styled-components';
import { Dimensions } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import Animated from 'react-native-reanimated';

const { width, height } = Dimensions.get('screen');

export const Overlay = styled.View`
    position: absolute;
    width: ${width}px;
    height: ${height};
    z-index: 10;
`;

export const Container = styled(Touchable)`
    flex-direction: row;
    align-items: center;
    padding: 0 15px;
    background-color: white;
`;

export const Card = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 25px; 
`;

export const Avatar = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: contain;
`;

export const AnimatedAvatar = styled(Animated.Image)`
    position: absolute;
    width: 100%;
    height: 100%;
    resize-mode: contain;
    margin-vertical: 10px;
`;

export const ContactInfo = styled.View`
    flex: 1;
    padding: 20px 10px;
    border-bottom-width: 1px;
    border-color: rgba(150, 150, 150, .2);
    justify-content: center;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Name = styled.Text`
    font-size: 16px;
`;

export const LastMessage = styled.Text.attrs({
    numberOfLines: 1
})`
    opacity: .5;
`;

export const MessageDate = styled.Text`
    font-size: 12px;
    opacity: .5;
`;