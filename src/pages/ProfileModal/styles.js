import styled from 'styled-components';
import { Dimensions, TouchableOpacity} from 'react-native';
import Touchable from 'react-native-platform-touchable';
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
    width: ${width-100}px;
    height: 300px;
    position: absolute;
    z-index: 10;
`;

export const Avatar = styled.Image`
    width: 100%;
    height: 250px;
    border-radius: 0;
    resize-mode: contain;
`;

export const ContactInfo = styled.View`
    flex: 1;
    padding: 20px 10px;
    border-bottom-width: 1px;
    border-color: rgba(150, 150, 150, .2);
    justify-content: center;
    border-top-width: 1px;
    background-color: white;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Name = styled.Text`
    font-size: 16px;
`;