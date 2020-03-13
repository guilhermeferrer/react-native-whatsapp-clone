import React from 'react';
import { Dimensions } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Container, Footer, CameraActions, Button, Circle, FlashIcon, CameraIcon, HelpText } from './styles';
import { cameraReverse } from '../../assets/icons';

import { TapGestureHandler, State } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { onGestureEvent, withTimingTransition } from 'react-native-redash';

const { height, width } = Dimensions.get('window');

export default function Camera() {

    const { Value, useCode, block, cond, eq, set, interpolate } = Animated;

    const state = new Value(State.FAILED);

    const gestureEvent = onGestureEvent({ state });

    const shouldScale = new Value(0);

    useCode(() => block([
        cond(
            eq(state, State.BEGAN),
            set(shouldScale, 1),
            set(shouldScale, 0)
        )
    ]), [state]);

    const scale = withTimingTransition(interpolate(shouldScale, {
        inputRange: [0, 1],
        outputRange: [1, 1.5]
    }), { duration: 100 });

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
                    <TapGestureHandler {...gestureEvent}>
                        <Button style={{ transform: [{ scale }] }}>
                            <Circle style={{ opacity: shouldScale }} />
                        </Button>
                    </TapGestureHandler>
                    <CameraIcon source={cameraReverse} />
                </CameraActions>
                <HelpText>Segure para vídeo, toque para foto</HelpText>
            </Footer>
        </Container>
    );
}