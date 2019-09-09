import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeView from '@views/HomeView';

const AppNavigator = createStackNavigator ({
    Home: {
        screen: HomeView
    },
}, {
    headerMode: 'none',
    initialRouteName: 'Home'
});

export default createAppContainer(AppNavigator);