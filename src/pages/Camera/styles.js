import styled from 'styled-components';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    width: ${width}px;
    height: ${height}px;
`;