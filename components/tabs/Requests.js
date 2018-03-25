import React from 'react';

import {
    Container, Header, Title, Content, Footer,
    FooterTab, Button, Left, Right, Body,
    Tab, Tabs, TabHeading, Text, Icon
} from 'native-base';

class Requests extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='person-add' type='MaterialIcons' style={{ color: tintColor }}/>
        )
    }
    render() {
        return (
            <Container>
                <Content>
                    <Text> Add me as your friend </Text>
                </Content>
            </Container>
        );
    }
}

export default Requests;
