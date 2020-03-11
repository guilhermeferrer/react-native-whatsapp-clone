import styled from 'styled-components';
import Touchable from 'react-native-platform-touchable';

export const Container = styled(Touchable)`
    flex-direction: row;
    align-items: center;
    padding: 0 15px;
`;

export const Card = styled.TouchableOpacity`
    width: 55px;
    height: 55px;
    overflow: hidden;
    border-radius: 28px; 
`;

export const Avatar = styled.Image`
    width: 55px;
    height: 55px;
    border-radius: 0;
    resize-mode: contain;
`;

export const Column = styled.View`
    flex: 1;
    padding: 20px 10px;
    border-bottom-width: ${props => props.borderLess ? 0 : 1 }px;
    border-color: rgba(150, 150, 150, .2);
    justify-content: center;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const MainText = styled.Text`
    font-size: 16px;
    color: black;    
`;

export const SubTitle = styled.Text.attrs({
    numberOfLines: 1
})`
    opacity: .5;
`;

export const ExtraText = styled.Text`
    font-size: 12px;
    opacity: .5;
`;