import React from 'react';

import {
    Container, Header, Title, Content, Footer,
    FooterTab, Button, Left, Right, Body, Icon, Text,
    Item, Input, Form
} from 'native-base';

import { View } from 'react-native';

class HomeTab extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='home' style={{ color: tintColor }} />
        )
    }
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="Username" />
                        </Item>
                        <Item last>
                            <Input placeholder="Password" />
                        </Item>
                    </Form>
                    <View style={{alignContent: 'center'}}>
                        <Button bordered>
                            <Text>Login</Text>
                        </Button>
                    </View>
                    
                </Content>
            </Container>
        );
    }
}

export default HomeTab;
