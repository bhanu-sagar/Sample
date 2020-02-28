import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/store';
// import MainContainer from './src/components/MainContainer/MainContainer';
// import Login from './src/components/Login/Login';
import Reset from './src/components/Reset';

export default class App extends Component {
  
  render() {
    return <Reset />
    // return (
    //   <View>
    //     {/* <Provider store={store}> */}
    //       {/* <MainContainer /> */}
    //       {/* <Login /> */}
    //       <Reset />

    //     {/* </Provider> */}
    //   </View>
    // )
  }
}