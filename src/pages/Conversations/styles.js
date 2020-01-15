import styled from 'styled-components';
import Touchable from 'react-native-platform-touchable';
import { Dimensions, NativeModules } from 'react-native';
import Animated from 'react-native-reanimated';

const { StatusBarManager: { HEIGHT } } = NativeModules;
const { width, height } = Dimensions.get('window');

export const Scroll = styled(Animated.ScrollView)`
    width: ${width}px;
    padding-top: ${HEIGHT}px;
`;

export const Offset = styled.View`
    height: 100px;
`;

export const Convertation = styled(Touchable)`
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 0 15px;
    background-color: white;
`;

export const Avatar = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
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