import React from 'react';

import { Container, Scroll, StatusIcon, Divisor, DivisorText, Offset, Card, Column, Avatar, GreenCircle, Plus, Row } from './styles';
import faker from 'faker';
import { useMemoOne } from 'use-memo-one';
import Svg, { Path } from 'react-native-svg';
import BaseRow from '../../components/base-row';

export default function Status({ childScrollGesture }) {
    const size = 65;
    const strokeWidth = 2;
    const r = size / 2;

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
            <Row
                Children={
                    <StatusIcon>
                        <Svg width={size} height={size}>
                            {renderCirclePart(Math.ceil(Math.random() * 10))}
                            <Card>
                                <Avatar source={{ uri: item.avatar }} />
                            </Card>
                        </Svg>
                    </StatusIcon>
                }
                mainText={item.name}
                subTitle={item.date}
            />
        ));
    }

    function getSectorPath(x, y, outerDiameter, a1, a2) {
        const degtorad = Math.PI / 180;
        const halfOuterDiameter = outerDiameter / 2;
        const cr = halfOuterDiameter - 5;
        const cx1 = (Math.cos(degtorad * a2) * cr) + x;
        const cy1 = (-Math.sin(degtorad * a2) * cr) + y;
        const cx2 = (Math.cos(degtorad * a1) * cr) + x;
        const cy2 = (-Math.sin(degtorad * a1) * cr) + y;

        return `M${cx1} ${cy1} A${cr} ${cr} 0 0 1 ${cx2} ${cy2}`;
        //return `M${x} ${y} ${cx1} ${cy1} A${cr} ${cr} 0 0 1 ${cx2} ${cy2}Z`;
    }

    function renderCirclePart(size) {
        let slice = 360 / size;
        let x = false;
        let y = 90;
        let coords = [];

        for (let i = 1; i <= size; i++) {
            x = y;
            y = x + slice;
            coords.push({
                x: x > 360 ? x - 360 + 5 : x + 5,
                y: y > 360 ? y - 360 - 5 : y - 5
            });
        }

        if (size === 1) {
            coords = [{ x: 0, y: 180 }, { x: 180, y: 360}];
        }

        const circle = coords.map(coord => {
            return (
                <Path
                    stroke="#c4c4c4"
                    fill="none"
                    d={getSectorPath(r, r, r * 2, coord.x, coord.y)}
                    strokeLinecap={"round"}
                    {...{ strokeWidth }}
                />
            )
        });
        return circle;
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