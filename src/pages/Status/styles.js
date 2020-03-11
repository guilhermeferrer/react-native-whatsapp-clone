import styled from 'styled-components';
import { Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    width: ${width}px;
    height: ${height}px;
`;

export const Scroll = styled(Animated.ScrollView).attrs({
    
})`

`;

export const Column = styled.TouchableOpacity`
    width: 55px;
    height: 55px;
`;

export const Card = styled(Column)`
    width: 55px;
    height: 55px;
    border-radius: 28px;
    overflow: hidden;
`;

export const Avatar = styled.Image`
    width: 55px;
    height: 55px;
    border-radius: 28px;
    resize-mode: contain;
`;

export const GreenCircle = styled.View`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: #25D366;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
    elevation: 2;
`;

export const Plus = styled(Icon).attrs({
    name: 'add'
})`
    color: white;
    font-size: 18px;
`;

export const Divisor = styled.View`
    height: 35px;
    background-color: #F4F4F4;
    border-top-width: 0.2px;
    border-color: rgba(150, 150, 150, .4);
    justify-content: center;
    padding-left: 15px;
`;

export const DivisorText = styled.Text`
    color: rgba(0, 0, 0, .5);
    font-weight: bold;
`;

export const Offset = styled.View`
    height: 124px;
`;