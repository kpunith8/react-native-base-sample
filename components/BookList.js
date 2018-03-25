import React, { Component } from 'react';
import { List, ListItem, Left, Body, Right, Text } from 'native-base';

const BookList = ({ books }) => {
    const bookDetail = books.map(book => (
      <ListItem key={book.id}>
        <Body>
          <Text>{book.title}</Text>
          <Text note>{book.description}</Text>
        </Body>
        <Right>
          <Text note>{book.createdAt.getHours()} : {book.createdAt.getMinutes()}</Text>
        </Right>
      </ListItem>
    ));

    return (
      <Body>
      <Text> List of books </Text>
      <List>
        {bookDetail}
      </List>
      </Body>
    );
}

export default BookList;