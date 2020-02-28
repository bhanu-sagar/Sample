import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'native-base';
import axios from './axios';
import Spinner from 'react-native-loading-spinner-overlay';


class Reset extends Component {

    constructor() {
        super();
        this.state = {
            loading: false,
            msg: "",
            buttonClick:false
        }
    }


    getUserDetails = (e, msg) => {
        this.setState({ loading: true,msg:'',buttonClick:true });
        e.preventDefault();
        const userInfo = {
            loginId: msg
        }
        axios.post('forgot-password', userInfo)
            .then(response => {
                this.setState({ loading: false, msg: response.data.message })
            })
            .catch(error => {
                const errorMessage=error.response.data.error;
                this.setState({ loading: false, msg: errorMessage.message })
            });
    }

    data = (ev) => {
        const { text } = ev.nativeEvent;
        this.setState({ msg: text,buttonClick:false })

    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.forgot}>Forgot your Password?</Text>
                    <Text style={styles.message}>Please enter the email address registered on your account</Text>
                </View>
                <View style={styles.input}>
                    <Input
                        onChange={(ev) => this.data(ev)}
                        label="Email address"
                        labelStyle={{
                            color: "#000",
                            fontWeight: "normal"
                        }}
                    />
                </View>
                <Button style={styles.buttonStyle} onPress={(e) => this.getUserDetails(e, this.state.msg)} ><Text style={styles.reset}> Reset password</Text></Button>
                
                <View>
                    {this.state.loading ? <Spinner
                        visible={true}
                        textContent={'Loading...'}
                        textStyle={styles.spinnerTextStyle}
                    /> : <Text style={{textAlign:'center',margin:20,color:'red'}}>{this.state.buttonClick===true? this.state.msg:""}</Text>}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        margin: 10
    },
    forgot: {
        textAlign: "center",
        fontSize: 20,
        marginBottom: 10,
        fontWeight: "bold"
    },
    message: {
        textAlign: "center",
        marginBottom: 10,
        color: "grey",
        fontSize: 12
    },
    buttonStyle: {
        backgroundColor: "#F25278",
        marginTop: 10
    },
    reset: {
        fontWeight: "bold",
        textAlign: "center",
        flex: 1,
        color: "#fff"
    },
    formAlign: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        display: "flex",
        marginTop: 40
    },spinnerTextStyle: {
        color: '#FFF'
      }

})

export default Reset