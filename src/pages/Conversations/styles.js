import styled from 'styled-components';
import { Dimensions, NativeModules } from 'react-native';
import Animated from 'react-native-reanimated';

const { StatusBarManager: { HEIGHT } } = NativeModules;
const { width } = Dimensions.get('window');

export const Scroll = styled(Animated.ScrollView).attrs({
    contentContainerStyle: {
        paddingTop: HEIGHT
    }
})`
    width: ${width}px;
`;

export const Offset = styled.View`
    height: 100px;
`;