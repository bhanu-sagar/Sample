import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

import { Input } from 'react-native-elements';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            login: "",
            buttonClick: false
        }
    }

    onPress = (login) => {
        console.log("LOGIN", login)
    }

    onChange = (event) => {    

        const { text} = event.nativeEvent;
        this.setState({login:text});
      };

    render() {
        return (
            <View>
                <TextInput
                    value={this.state.login}
                    onChange={this.onChange}
                    placeholder='INPUT WITH ERROR MESSAGE'
                    errorStyle={{ color: 'red' }}
                    errorMessage={this.state.buttonClick === true ? 'ENTER A VALID ERROR HERE' : ""}
                />

                <Button title="Reset" onPress={() => this.props.navigation.navigate('Reset')} />

            </View>
        )
    }
}