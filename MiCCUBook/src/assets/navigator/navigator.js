// Navigation imports
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'

// Imported Views
import HomeView from '@views/HomeView';
import AboutView from '@views/AboutView';
import CalculatorView from '@views/CalculatorView';

// Components
import { Icon } from 'native-base';
import * as React from 'react';

const BottomTabNavigator = createBottomTabNavigator ({
    Calculator: {
        screen: CalculatorView
    },
    Home: {
        screen: HomeView
    },
    Download: {
        screen: HomeView
    },
}, {
    headerMode: 'none',
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;

            if (routeName==='Calculator') {
                return (
                    <Icon name='calculator' size={40} style={{color:tintColor}}/>
                )
            }

            if (routeName==='Home') {
                return (
                    <Icon name='home' size={40} style={{color:tintColor}}/>
                )
            }

            if (routeName==='Download') {
                return (
                    <Icon name='download' size={40} style={{color:tintColor}}/>
                )
            }
        }
    })
})

const MainAppNavigator = createStackNavigator ({
    BottomTabs: {
        screen: BottomTabNavigator
    },
    About: {
        screen: AboutView
    },
}, {
    headerMode: 'none',
});

export default createAppContainer(MainAppNavigator);