import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { Container, Footer, Content, Card, CardItem, Header, Title, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
// import { Header } from 'react-native-elements'

class UserDetails extends Component {



    render() {
        const { details } = this.props;
        return (
            
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: details.picture.thumbnail }} />
                                <Body>
                                    <Text>{details.name.first}</Text>
                                    <Text note>{details.name.last}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{ uri: details.picture.medium }} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>12 Likes</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Button transparent>
                                    <Icon active name="chatbubbles" />
                                    <Text>4 Comments</Text>
                                </Button>
                            </Body>
                            <Right>
                                <Text>11h ago</Text>
                            </Right>
                        </CardItem>
                    </Card>
                

        )
    }
}

export default UserDetails


