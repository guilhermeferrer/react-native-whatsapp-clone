import React from 'react';

import { Container, Card, Avatar, Row, Column, MainText, SubTitle, ExtraText } from './styles';

export default function BaseRow({ Children = false, url, mainText, subTitle, extraText = "", borderLess = false }) {
    return (
        <Container>
            <>
                {Children ? Children :
                    <Card>
                        <Avatar source={{ uri: url }} />
                    </Card>
                }
                <Column {...{borderLess}}>
                    <Row>
                        <MainText>{mainText}</MainText>
                        <ExtraText>{extraText}</ExtraText>
                    </Row>
                    <SubTitle>{subTitle}</SubTitle>
                </Column>
            </>
        </Container>
    );
}