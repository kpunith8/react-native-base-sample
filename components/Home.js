import React from 'react';
import { Expo } from 'expo';
import { StyleSheet } from 'react-native';
import { Container, Content, Body, Header, Text, Left, Right, Icon } from 'native-base';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import HomeTab from './tabs/HomeTab';
import Profile from './tabs/Profile';
import Requests from './tabs/Requests';

class Home extends React.Component {
    static navigationOptions = {
        title: 'Book Store',
        headerRight: <Icon style={{ paddingRight: 10 }} name='settings' />
    }

    render() {
        return (
            <HomeTabNavigator />
        );
    }
}

const HomeTabNavigator = TabNavigator({
    HomeTab: { screen: HomeTab },
    ProfileTab: { screen: Profile },
    RequestsTab: { screen: Requests },
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
}
    
);
export default Home;
