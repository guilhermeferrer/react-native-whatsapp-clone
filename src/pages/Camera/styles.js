import styled from 'styled-components';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    width: ${width}px;
    height: ${height}px;
    justify-content: flex-end;
    align-items: center;
`;

export const Footer = styled.View`
    width: 70%;
    padding: 15px 0;
    align-items: center;
`;

export const CameraActions = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`;

export const Button = styled(Animated.View)`
    width: 70px;
    height: 70px;
    border-radius: 35px;
    border-width: 2px;
    border-color: white;
    justify-content: center;
    align-items: center;
`;

export const Circle = styled(Animated.View)`
    width: 90%;
    height: 90%;
    border-radius: 50px;
    background-color: red;
`;

export const HelpText = styled.Text`
    color: white;
`;

export const FlashIcon = styled(Icon)`
    font-size: 26px;
    color: white;
`;

export const CameraIcon = styled.Image`
    width: 35px;
    height: 35px;
    resize-mode: contain;
`;