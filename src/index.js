import React, { useRef, useState } from 'react';
import { Dimensions, StatusBar, NativeModules } from 'react-native';
import Animated, { useCode } from 'react-native-reanimated';
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
    Bar,
    Overlay,
    Touggle
} from './styles';

import Camera from './pages/Camera';
import Conversations from './pages/Conversations';
import { setState } from 'expect/build/jestMatchersObject';

const { StatusBarManager: { HEIGHT } } = NativeModules;
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const INDICATOR_WIDTH = (SCREEN_WIDTH - 50) / 3;

export default function Home() {

    const AnimatedCameraIcon = Animated.createAnimatedComponent(CameraIcon);

    const { Value, event, interpolate, Extrapolate, diffClamp, block, cond, lessOrEq, lessThan, call, color, greaterThan, greaterOrEq, set, and, eq } = Animated;

    const { scrollX, childScroll } = useMemoOne(() => ({
        scrollX: new Value(0),
        childScroll: new Value(0)
    }), []);

    const opacity = new Value(0);

    const scrollRef = useRef();

    const width = interpolate(opacity, {
        inputRange: [0, 0.2],
        outputRange: [0, SCREEN_WIDTH]
    });

    const height = interpolate(opacity, {
        inputRange: [0, 0.2],
        outputRange: [0, SCREEN_HEIGHT]
    });

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

    const translateX = interpolate(scrollX, {
        inputRange: [0, 360, SCREEN_WIDTH * 3],
        outputRange: [0, 50, (SCREEN_WIDTH - INDICATOR_WIDTH)],
        extrapolate: Extrapolate.CLAMP
    });

    const cameraTab = interpolate(translateX, {
        inputRange: [20, 50, (SCREEN_WIDTH - INDICATOR_WIDTH * 2), (SCREEN_WIDTH - INDICATOR_WIDTH)],
        outputRange: [1, .5, .5, .5],
        extrapolate: Extrapolate.CLAMP
    });

    const firstTab = interpolate(translateX, {
        inputRange: [0, 50, (SCREEN_WIDTH - INDICATOR_WIDTH * 2), (SCREEN_WIDTH - INDICATOR_WIDTH)],
        outputRange: [.5, 1, .5, .5],
        extrapolate: Extrapolate.CLAMP
    });

    const secondTab = interpolate(translateX, {
        inputRange: [0, 50, (SCREEN_WIDTH - INDICATOR_WIDTH * 2), (SCREEN_WIDTH - INDICATOR_WIDTH)],
        outputRange: [.5, .5, 1, .5],
        extrapolate: Extrapolate.CLAMP
    });

    const thirdTab = interpolate(translateX, {
        inputRange: [0, 50, (SCREEN_WIDTH - INDICATOR_WIDTH * 2), (SCREEN_WIDTH - INDICATOR_WIDTH)],
        outputRange: [.5, .5, .5, 1],
        extrapolate: Extrapolate.CLAMP
    });

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
                    {...{ childScrollGesture, childScroll, opacity }}
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
                        <AnimatedCameraIcon
                            style={{
                                opacity: cameraTab
                            }}
                        />
                    </CameraTab>
                    <Tab width={INDICATOR_WIDTH}
                        onPress={() => scrollRef.current.getNode().scrollTo({ x: SCREEN_WIDTH, y: 0, animated: true })}
                    >
                        <Label
                            style={{
                                opacity: firstTab
                            }}
                        >
                            CONVERSAS
                        </Label>
                    </Tab>
                    <Tab
                        width={INDICATOR_WIDTH}
                        onPress={() => scrollRef.current.getNode().scrollTo({ x: SCREEN_WIDTH * 2, y: 0, animated: true })}
                    >
                        <Label
                            style={{
                                opacity: secondTab
                            }}
                        >
                            STATUS
                        </Label>
                    </Tab>
                    <Tab
                        width={INDICATOR_WIDTH}
                        onPress={() => scrollRef.current.getNode().scrollTo({ x: SCREEN_WIDTH * 3, y: 0, animated: true })}
                    >
                        <Label
                            style={{
                                opacity: thirdTab
                            }}
                        >
                            CHAMADA
                        </Label>
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
                                    translateX
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
            <Overlay>
                <Touggle
                    style={{
                        opacity,
                        width,
                        height
                    }}
                />
            </Overlay>
            <StatusBar backgroundColor={'transparent'} translucent />
        </Container>
    );
}