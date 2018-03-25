import React from 'react';

import {
    Container, Header, Title, Content, Footer,
    FooterTab, Button, Left, Right, Body, Icon,
    Tab, Tabs, TabHeading, Text
} from 'native-base';

class Profile extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='user' type='FontAwesome' style={{ color: tintColor }}/>
        )
    }
    render() {
        return (
            <Container>
                <Content>
                    <Text> Profile </Text>
                </Content>
            </Container>
        );
    }
}

export default Profile;