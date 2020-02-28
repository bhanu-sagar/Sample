import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { Container, Footer, Content, Card, CardItem, Header, Title, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import { connect } from 'react-redux'
import UserDetails from './UserDetails';
import { getUsersList } from '../../actions/MainContainer/MainContainer';

class MainContainer extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    yesButtonClick = () => {
        this.setState({
            count: this.state.count + 1
        });

        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data =>
                this.props.dispatch(getUsersList(data))
            );

    }

    noButton = () => {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data =>
                this.props.dispatch(getUsersList(data))
            );
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data =>
                this.props.dispatch(getUsersList(data))
            );
    }


    render() {
        const { users } = this.props;
        return (
            <View >
                <View >
                    <Header style={styles.container}>
                        <Left>
                            <Text style={{ marginLeft: 16, color: 'black', fontWeight: 'bold', fontSize: 18 }}>HIII</Text>
                        </Left>

                        <Right>
                            <View style={{ borderRadius: 4, backgroundColor: '#fff' }}>
                                <Text style={{ marginRight: 16, color: 'black', fontSize: 14, paddingVertical: 4, paddingHorizontal: 8 }}>{this.state.count}</Text>
                            </View>
                        </Right>
                    </Header>
                </View>
                <View>
                    {users && users.results ?


                        <FlatList
                            data={users.results}
                            renderItem={({ item }) => <UserDetails details={item} noButton={this.noButton} count={this.state.count} yesButtonClick={this.yesButtonClick} />}
                            keyExtractor={item => item.id}

                        />



                        : <Text>Loading...</Text>}
                </View>
                <View >
                    <Footer style={styles.footerContainer}>
                        <Left>
                            <Button
                                disabled={this.state.count === 5}
                                style={{ backgroundColor: this.state.count === 5 ? "#757575" : "#FF6F00", height: 60, }} onPress={this.yesButtonClick}>
                                <Text style={styles.textColor}>Yes</Text>
                            </Button>
                        </Left>

                        <Right>
                            <Button style={styles.noButton} onPress={this.noButton}>
                                <Text style={styles.textColor}>No</Text>
                            </Button>
                        </Right>
                    </Footer>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.main.usersList
    }
}

function mapDispatchToProps(dispatch) {
    return { dispatch };

}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

var styles = StyleSheet.create({
   
    container: {
        height: 60,
        backgroundColor: '#424242',
        justifyContent: 'center',
    },
    footerContainer: {

    },
    yesButton: {

    },
    noButton: {
        backgroundColor: "#424242",
        height: 60,
    },
    textColor: {
        color: "#fff",
        flex: 1,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18
    }
});