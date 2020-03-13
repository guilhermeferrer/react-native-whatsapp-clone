import styled from 'styled-components';
import { Dimensions, TouchableOpacity } from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import Animated from 'react-native-reanimated';

const { width, height } = Dimensions.get('screen');

export const Container = styled(Animated.View)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    flex: 1;
`;

export const Card = styled(Animated.View)`
    width: ${width - 100}px;
    height: 250px;
    position: absolute;
    z-index: 10; 
`;

export const Avatar = styled.Image`
    width: 100%;
    height: 230px;
    border-radius: 25px;
    resize-mode: contain;
`;

export const ContactInfo = styled.View`
    height: 50px;
    border-bottom-width: 1px;
    border-color: rgba(150, 150, 150, .2);
    justify-content: center;
    border-top-width: 1px;
    background-color: white;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;
export const Title = styled.View`
    background-color: white;
    opacity: 0.5;
    position: absolute;
`;

export const Name = styled.Text`
    font-size: 16px;
`;

export const Icon = styled(MIcon)`
    font-size: 22px;
    color: #128C7E;
`;