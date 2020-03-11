import React from 'react';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

import { Avatar, Card } from './styles';

import { SharedElement } from 'react-navigation-shared-element';
import BaseRow from '../base-row';

function Conversation({ avatar, name, date, message, navigation }) {

    return (
        <BaseRow
            Children={
                <Card onPress={() => navigation.navigate('ProfileModal', { avatar, name })}>
                    <SharedElement id={avatar} style={StyleSheet.absoluteFill}>
                        <Avatar source={{ uri: avatar }} />
                    </SharedElement>
                    <Avatar style={StyleSheet.absoluteFill} source={{ uri: avatar }} />
                </Card>
            }
            mainText={name}
            subTitle={message}
            extraText={date}
        />
    )
}

export default withNavigation(Conversation);