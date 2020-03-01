import 'react-native-gesture-handler';
import React, { Component } from 'react';
// import { View, Text, Button } from 'react-native';
// import { Provider } from 'react-redux';
// import store from './src/store/store';
// import MainContainer from './src/components/MainContainer/MainContainer';
import Login from './src/components/Login/Login';
import Reset from './src/components/Reset';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class App extends Component {

  render() {
    // return <Reset />
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        {/* <Provider store={store}> */}
        {/* <MainContainer /> */}
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Login}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Reset" component={Reset} />
        </Stack.Navigator>
        {/* <Reset /> */}

        {/* </Provider> */}
      </NavigationContainer>
    )
  }
}