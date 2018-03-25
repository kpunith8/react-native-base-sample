import React from 'react';
import BookList from '../BookList';

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
    };

    render() {
        const { params } = this.props.navigation.state;
        const books = params ? params.books : [];

        return (
            <Container>
                <Content>
                    <BookList books={books} />
                </Content>
            </Container>
        );
    }
}

export default Profile;