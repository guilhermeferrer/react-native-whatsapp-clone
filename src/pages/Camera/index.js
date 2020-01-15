import React from 'react';
import { Dimensions, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

import { Container } from './styles';

const { height, width } = Dimensions.get('window');

export default function Camera(){
    return (
        <Container>
            <RNCamera
                style={{
                    height,
                    width,
                    position: 'absolute'
                }}
            />
        </Container>
    );
}