import React from 'react';
import { Dimensions } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Container, Footer, CameraActions, Button, FlashIcon, CameraIcon, HelpText } from './styles';
import { cameraReverse } from '../../assets/icons';

const { height, width } = Dimensions.get('window');

export default function Camera() {
    return (
        <Container>
            <RNCamera
                style={{
                    height,
                    width,
                    position: 'absolute'
                }}
            />
            <Footer>
                <CameraActions>
                    <FlashIcon name={"flash-off"} />
                    <Button />
                    <CameraIcon source={cameraReverse}/>
                </CameraActions>
                <HelpText>Segure para vídeo, toque para foto</HelpText>
            </Footer>
        </Container>
    );
}