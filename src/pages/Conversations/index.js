import React from 'react';
import faker from 'faker';
import { useMemoOne } from 'use-memo-one';

import { Scroll, Convertation, Avatar, ContactInfo, Row, Name, LastMessage, MessageDate, Offset } from './styles';

export default function Conversations({ childScrollGesture }) {
    const { fakeData } = useMemoOne(() => ({
        fakeData: new Array(20).fill(0).map(item => ({
            avatar: faker.image.avatar(),
            name: faker.name.firstName(),
            message: faker.lorem.sentence(),
            date: faker.date.weekday()
        }))
    }), []);

    function renderConvertation() {
        const convertations = fakeData.map(({ avatar, name, message, date }, index) => {
            return (
                <Convertation key={index}>
                    <>
                        <Avatar source={{ uri: avatar }} />
                        <ContactInfo>
                            <Row>
                                <Name>{name}</Name>
                                <MessageDate>{date}</MessageDate>
                            </Row>
                            <LastMessage>{message}</LastMessage>
                        </ContactInfo>
                    </>
                </Convertation>
            );
        });

        return convertations;
    }

    return (
        <Scroll
            onScroll={childScrollGesture}
        >
            <Offset />
            {renderConvertation()}
        </Scroll>
    );
}
