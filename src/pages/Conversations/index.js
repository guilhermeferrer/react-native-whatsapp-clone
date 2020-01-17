import React from 'react';
import faker from 'faker';
import { useMemoOne } from 'use-memo-one';

import { Scroll, Offset } from './styles';

import Conversation from '../../components/conversation';

export default function Conversations({ childScrollGesture, childScroll, opacity }) {
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
                <Conversation
                    key={index}
                    {...{ avatar, name, message, date, childScroll, index, opacity}}
                />
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