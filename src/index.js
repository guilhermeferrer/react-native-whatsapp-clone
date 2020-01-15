import React, { useRef, useState } from 'react';
import { Dimensions, StatusBar, NativeModules } from 'react-native';
import Animated from 'react-native-reanimated';
import { useMemoOne } from 'use-memo-one';

import {
    Container,
    Header,
    TitleBar,
    Title,
    CircleTab,
    Search,
    Menu,
    MenuIcon,
    Tab,
    Label,
    CameraTab,
    CameraIcon,
    Line,
    Page,
    Bar
} from './styles';

import Camera from './pages/Camera';
import Conversations from './pages/Conversations';

const { StatusBarManager: { HEIGHT } } = NativeModules;
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const INDICATOR_WIDTH = (SCREEN_WIDTH - 50) / 3;

export default function Home() {

    const [active, setActive] = useState(2);
    const { Value, event, interpolate, Extrapolate, diffClamp, block, cond, lessThan, call, color, greaterThan, greaterOrEq, set, and } = Animated;

    const { scrollX, childScroll } = useMemoOne(() => ({
        scrollX: new Value(0),
        childScroll: new Value(0)
    }), []);

    const scrollRef = useRef();

    const scrollGesture = event([
        {
            nativeEvent: ({ contentOffset: { x } }) => 
                set(scrollX, x)
        }
    ]);

    const childScrollGesture = event([
        {
            nativeEvent: {
                contentOffset: {
                    y: childScroll
                }
            }
        }
    ]);

    const collpaseHeader = block([
        cond(
            lessThan(scrollX, 360),
            [
                interpolate(scrollX, {
                    inputRange: [0, 360],
                    outputRange: [-106 - (HEIGHT), 0],
                    extrapolate: Extrapolate.CLAMP
                })
            ],
            [
                interpolate(diffClamp(childScroll, 0, 57), {
                    inputRange: [0, 57],
                    outputRange: [0, -57],
                    extrapolate: Extrapolate.CLAMP
                })
            ]
        )
    ]);

    function changeActive({ nativeEvent }) {
        const { x } = nativeEvent.contentOffset;
        if (x < 360) {
            setActive(1);
        } else if (x >= 360 && x < 720) {
            setActive(2);
        } else if (x >= 720 && x < 1080) {
            setActive(3);
        } else {
            setActive(4);
        }
    }

    return (
        <Container>
            <Animated.ScrollView
                horizontal
                pagingEnabled
                onScroll={scrollGesture}
                ref={scrollRef}
                onContentSizeChange={() => scrollRef.current.getNode().scrollTo({ x: 360 })}
                style={{
                    paddingBottom: 24
                }}
            >
                <Camera />
                <Conversations
                    childScrollGesture={childScrollGesture}
                />
                <Page />
                <Page />
            </Animated.ScrollView>
            <Header
                style={{
                    transform: [
                        {
                            translateY: collpaseHeader
                        }
                    ]
                }}
            >
                <TitleBar>
                    <Title>WhatsApp</Title>
                    <CircleTab>
                        <Search />
                    </CircleTab>
                    <MenuIcon />
                </TitleBar>
                <Menu>
                    <CameraTab
                        onPress={() => scrollRef.current.getNode().scrollTo({ x: 0, y: 0, animated: true })}
                    >
                        <CameraIcon active={active === 1 && true} />
                    </CameraTab>
                    <Tab width={INDICATOR_WIDTH}
                        onPress={() => scrollRef.current.getNode().scrollTo({ x: SCREEN_WIDTH, y: 0, animated: true })}
                    >
                        <Label active={active === 2 && true}>CONVERSAS</Label>
                    </Tab>
                    <Tab
                        width={INDICATOR_WIDTH}
                        onPress={() => scrollRef.current.getNode().scrollTo({ x: SCREEN_WIDTH * 2, y: 0, animated: true })}
                    >
                        <Label active={active === 3 && true}>STATUS</Label>
                    </Tab>
                    <Tab
                        width={INDICATOR_WIDTH}
                        onPress={() => scrollRef.current.getNode().scrollTo({ x: SCREEN_WIDTH * 3, y: 0, animated: true })}
                    >
                        <Label active={active === 4 && true}>CHAMADAS</Label>
                    </Tab>
                    <Line
                        style={{
                            width: interpolate(scrollX, {
                                inputRange: [0, 360],
                                outputRange: [50, INDICATOR_WIDTH],
                                extrapolate: Extrapolate.CLAMP
                            }),
                            transform: [
                                {
                                    translateX: interpolate(scrollX, {
                                        inputRange: [0, 360, SCREEN_WIDTH * 3],
                                        outputRange: [0, 50, (SCREEN_WIDTH - INDICATOR_WIDTH)],
                                        extrapolate: Extrapolate.CLAMP
                                    })
                                }
                            ]
                        }}
                    />
                </Menu>
            </Header>
            <Bar
                style={{
                    height: interpolate(scrollX, {
                        inputRange: [0, 360],
                        outputRange: [0, HEIGHT],
                        extrapolate: Extrapolate.CLAMP
                    }),
                    backgroundColor: color(5, 77, 68, interpolate(scrollX, {
                        inputRange: [0, 360],
                        outputRange: [0, 1],
                        extrapolate: Extrapolate.CLAMP
                    }))
                }}
            />
            <StatusBar backgroundColor={'transparent'} translucent />
        </Container>
    );
}