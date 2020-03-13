import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';

import { SharedElement } from 'react-navigation-shared-element';

import { Container, Avatar, ContactInfo, Row, Name, Card, Icon, Title } from './styles';


function ProfileModal({ navigation }) {
    const { avatar, name } = navigation.state.params;
    const { Value, interpolate, color, Extrapolate } = Animated;

    const hasFoscused = new Value(navigation.isFocused() ? 1 : 0);
    const backgroundColor = color(0, 0, 0, interpolate(hasFoscused, {
        inputRange: [0, hasFoscused],
        outputRange: [0, 0.4],
        extrapolate: Extrapolate.CLAMP
    }));

    return (
        <Container style={{ backgroundColor }} >
            <>
                <Card>
                    <SharedElement id={avatar}>
                        <Avatar source={{ uri: avatar }} />
                    </SharedElement>
                    <ContactInfo>
                        <Row>
                            <Icon outlined name={"chat"} />
                            <Icon outlined name={"phone"} />
                            <Icon outlined name={"videocam"} />
                            <Icon outlined name={"info"} />
                        </Row>
                    </ContactInfo>
                    <Title>
                        <Name>{name}</Name>
                    </Title>
                </Card>
                <TouchableOpacity style={StyleSheet.absoluteFillObject} onPress={() => navigation.goBack()} activeOpacity={1}>
                    <></>
                </TouchableOpacity>
            </>
        </Container>
    )
}

ProfileModal.sharedElements = (navigation) => {
    const avatar = navigation.getParam('avatar');
    return [{ id: avatar, resize: "clip" }];
}

export default ProfileModal;