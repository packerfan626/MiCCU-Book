// Navigation imports
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'

// Imported Views
import HomeView from '@views/HomeView';
import AboutView from '@views/AboutView';
import CalculatorView from '@views/CalculatorView';
import PDFView from '@views/PDFView';

// Components
import { Icon } from 'native-base';
import * as React from 'react';
import { 
    Platform, 
} from 'react-native';

const BottomTabNavigator = createBottomTabNavigator ({
    Calculator: {
        screen: CalculatorView
    },
    Home: {
        screen: HomeView
    },
    About: {
        screen: AboutView
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
                    <Icon name='book' size={40} style={{color:tintColor}}/>
                )
            }

            if (routeName==='About') {
                return (
                    Platform.OS === 'ios' ? 
                        <Icon name='ios-information-circle' size={40} style={{color:tintColor}}/> : 
                        <Icon name='md-information-circle' size={40} style={{color:tintColor}}/> 
                )
            }
        }
    })
})

const MainAppNavigator = createStackNavigator ({
    BottomTabs: {
        screen: BottomTabNavigator
    },
    PDF: {
        screen: PDFView
    },
}, {
    headerMode: 'none',
});

export default createAppContainer(MainAppNavigator);