import React, { useState } from 'react';
import Animated, { call } from 'react-native-reanimated';
import { State, TapGestureHandler } from 'react-native-gesture-handler';
import { onGestureEvent } from 'react-native-redash';

import { Container, Avatar, AnimatedAvatar, ContactInfo, Row, Name, LastMessage, MessageDate, Card, Overlay } from './styles';

export default function Conversation({ avatar, name, date, message, childScroll, index, opacity }) {
    const { Value, interpolate, Extrapolate, useCode, add, eq, set, cond } = Animated;

    const state = new Value(State.UNDETERMINED);
    const gestureHandler = onGestureEvent({ state });

   //useCode(() => cond(eq(state, State.END), set(opacity, 0.2)), []);

    // const [offset, setOffset] = useState(0);

    // // const shouldTranslate = new Value(active === index ? 1 : 0);

    // // const translateY = interpolate(shouldTranslate, {
    // //     inputRange: [0, 1],
    // //     outputRange: index === active ? [0, add(childScroll, (-offset - (80 * index)))] : [0, 0],
    // //     extrapolate: Extrapolate.CLAMP
    // // });

    // useCode(
    //     () =>
    //         call([childScroll], ([childScroll]) => {
    //             if (index === 5) {
    //                 console.log("conta");
    //                 console.log((offset-(80 * index )) + childScroll);
    //                 console.log(childScroll);
    //             }
    //         }),
    //     [childScroll]
    // );

    // function handleEvent(e) {
    //     setOffset(e.nativeEvent.layout.y - 100 - (80 * index));
    // }

    return (
        <Container
        //onLayout={handleEvent}
        >
            <>
                <TapGestureHandler
                    {...gestureHandler}
                >
                    <Card>
                        <Avatar source={{ uri: avatar }} />
                    </Card>
                </TapGestureHandler>
                <ContactInfo>
                    <Row>
                        <Name>{name}</Name>
                        <MessageDate>{date}</MessageDate>
                    </Row>
                    <LastMessage>{message}</LastMessage>
                </ContactInfo>
            </>
        </Container>
    )
}