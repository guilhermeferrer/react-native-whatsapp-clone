import { createAppContainer } from 'react-navigation';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Home from './';
import ProfileModal from './pages/ProfileModal';

const stack = createSharedElementStackNavigator({
    Home,
    ProfileModal
}, {
    headerMode: 'none',
    defaultNavigationOptions: {
        cardStyleInterpolator: ({ current: { progress } }) => {
            const opacity = progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolate: 'clamp'
            });
            return { cardStyle: { opacity } };
        },
        cardStyle: {
            backgroundColor: 'transparent'
        }
    }
});

export default createAppContainer(stack);