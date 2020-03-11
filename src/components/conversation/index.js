import React from 'react';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

import { Container, Avatar, ContactInfo, Row, Name, LastMessage, MessageDate, Card } from './styles';

import { SharedElement } from 'react-navigation-shared-element';

function Conversation({ avatar, name, date, message, navigation }) {

    return (
        <Container>
            <>
                <Card onPress={() => navigation.navigate('ProfileModal', { avatar, name })}>
                    <SharedElement id={avatar} style={StyleSheet.absoluteFill}>
                        <Avatar source={{ uri: avatar }} />
                    </SharedElement>
                </Card>
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

export default withNavigation(Conversation);