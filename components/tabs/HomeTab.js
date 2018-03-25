import React from 'react';

import {
    Container, Header, Title, Content, Footer,
    FooterTab, Button, Left, Right, Body, Icon, Text,
    Item, Input, Form, List, ListItem
} from 'native-base';
import uuid from 'uuid';

import { View, ScrollView } from 'react-native';
import BookList from '../BookList';

class HomeTab extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='home' style={{ color: tintColor }} />
        )
    };

    constructor(props) {
        super(props);
        this.state = {
            bookTitle: '',
            bookDescription: '',
            isBookAdded: false,
            books: [],
        };

    }

    btnAddBook = () => {
        this.setState(prevState => ({
            isBookAdded: true,
            bookTitle: '',
            bookDescription: '',
            books: prevState.books.concat({ id: uuid.v4(), title: this.state.bookTitle, description: this.state.bookDescription, createdAt: new Date() })
        }));
        this.props.navigation.navigate('ProfileTab', { books: this.state.books })
    }

    onDescriptionChange = (description) => {
        this.setState({ bookDescription: description });
    }

    onTitleChange = (title) => {
        this.setState({ bookTitle: title });
    }

    render() {
        return (
            <Container>
                <Content>
                    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column', alignContent: 'center' }}>
                        <Item>
                            <Input placeholder="Book title" style={{ width: 200 }} onChangeText={this.onTitleChange} value={this.state.bookTitle} />
                        </Item>
                        <Item>
                            <Input placeholder="Description" multiline={true} numberOfLines={4} style={{ height: 120 }} onChangeText={this.onDescriptionChange} value={this.state.bookDescription} />
                        </Item>
                        <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }} >
                            <Button iconLeft onPress={this.btnAddBook}>
                                <Icon name='plus-circle' type='FontAwesome' />
                                <Text>Add Book</Text>
                            </Button>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default HomeTab;
