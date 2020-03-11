import React from 'react';

import { Container, Scroll, Divisor, DivisorText, Offset, Card, Column, Avatar, GreenCircle, Plus } from './styles';
import BaseRow from '../../components/base-row';
import faker from 'faker';
import { useMemoOne } from 'use-memo-one';

export default function Status({ childScrollGesture }) {

    const { avatar, fakeData } = useMemoOne(() => ({
        avatar: faker.image.avatar(),
        fakeData: new Array(20).fill(0).map(item => ({
            avatar: faker.image.avatar(),
            name: faker.name.firstName(),
            date: faker.date.weekday()
        }))
    }), []);

    function renderRecentStatus() {
        return fakeData.map(item => (
            <BaseRow
                Children={
                    <Card>
                        <Avatar source={{ uri: item.avatar }} />
                    </Card>
                }
                mainText={item.name}
                subTitle={item.date}
            />
        ));
    }


    return (
        <Container>
            <Scroll onScroll={childScrollGesture}>
                <Offset />
                <BaseRow
                    Children={
                        <Column>
                            <Card>
                                <Avatar source={{ uri: avatar }} />
                            </Card>
                            <GreenCircle>
                                <Plus />
                            </GreenCircle>
                        </Column>
                    }
                    mainText={"Meu status"}
                    subTitle={"Toque para atualizar seu status"}
                    borderLess
                />
                <Divisor>
                    <DivisorText>Atualizações recentes</DivisorText>
                </Divisor>
                {renderRecentStatus()}
            </Scroll>
        </Container>
    );
}