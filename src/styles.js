import styled from 'styled-components';
import { Dimensions, NativeModules } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated from 'react-native-reanimated';

const { StatusBarManager: { HEIGHT } } = NativeModules;

const { width, height } = Dimensions.get('window');

export const Bar = styled(Animated.View)`
    width: ${width}px;
    height: ${HEIGHT}px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
`;

export const Container = styled.View`
    flex: 1;
    min-width: ${width}px;
    min-height: ${height+HEIGHT}px;
`;

export const Header = styled(Animated.View)`
    position: absolute;
    top: ${HEIGHT}px;
    left: 0;
    z-index: 1;
`;

export const TitleBar = styled.View`
    background-color: #075E54;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`;

export const Title = styled.Text`
    color: white;
    width: 80%;
    font-size: 20px;
    font-weight: bold;
`;

export const CircleTab = styled(Touchable).attrs({
    background: Touchable.Ripple('rgba(255, 255, 255, .2)', true)
})`
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
`;

export const Search = styled(Icon).attrs({
    name: 'ios-search'
})`
    font-size: 22px;
    color: white;
`;

export const MenuIcon = styled(Icon).attrs({
    name: 'md-more'
})`
    font-size: 22px;
    color: white;
`;

export const Menu = styled.View`
    background-color: #075E54;
    flex-direction: row;
`;

export const Tab = styled(Touchable).attrs({
    background: Touchable.Ripple('rgba(255, 255, 255, .2)')
})`
    width: ${({ width }) => width}px;
    justify-content: center;
    align-items: center;
    padding: 15px 0px;
`;

export const CameraTab = styled(Tab)`
    width: 50px;
    padding: 10px 0;
`;

export const CameraIcon = styled(Icon).attrs({
    name: 'ios-camera'
})`
    font-size: 28px;
    color: white;
`;

export const Label = styled(Animated.Text)`
    color: white;
    font-weight: bold;
    font-size: 14px;
    opacity: ${({ active }) => active ? 1 : .5};
`;

export const Line = styled(Animated.View)`
    height: 3px;
    background-color: white;
    position: absolute;
    bottom: 0;
    elevation: 5;
`;

export const Page = styled.View`
    width: ${Dimensions.get('window').width}px;
    height: ${Dimensions.get('window').height}px;
    background-color: ${({ index }) => index === 2 ? 'blue' : 'red'};
`;