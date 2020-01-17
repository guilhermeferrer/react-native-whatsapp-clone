import styled from 'styled-components';
import { Dimensions, NativeModules } from 'react-native';
import Animated from 'react-native-reanimated';

const { StatusBarManager: { HEIGHT } } = NativeModules;
const { width } = Dimensions.get('window');

export const Scroll = styled(Animated.ScrollView)`
    width: ${width}px;
    padding-top: ${HEIGHT}px;
`;

export const Offset = styled.View`
    height: 100px;
`;