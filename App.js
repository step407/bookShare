/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import { Button, Icon } from 'react-native-elements'
import { createStackNavigator,createDrawerNavigator, createAppContainer} from 'react-navigation';
import LoginPage from './src/loginPage'
import SignUpPage1 from './src/signUpPage'
import signUpPage2 from './src/signUp2'
import homePage from './src/homePage'
import browsePage from './src/browsePage'
import BrowsePage from './src/browsePage'

const InnerNavigator = createDrawerNavigator({
    HomePage: {
        screen: homePage,
        navigationOptions: () => ({
            title: 'Home Page',
            titleStyle: {textAlign: 'right'},
            headerRight: (
                <Icon
                    name='navicon'
                    type='evilicon'
                    color='#007FEB'
                    onPress={() => alert('This is a button!')}
                    containerStyle={style = { margin: 15 }}
                />
            ),
           drawerIcon: ({ tintColor }) => (
                <Icon
                    name='navicon'
                    type='evilicon'
                    color='#007FEB'
                    onPress={() => alert('This is a button!')}
                    
                />
            ),

        })
    },

    BrowsePage: {
        screen: browsePage,
        navigationOptions: () => ({
            title: 'Search',
            headerRight: (
                <Icon
                    name='navicon'
                    type='evilicon'
                    color='#007FEB'
                    onPress={() => alert('This is a button!')}
                    containerStyle={style = { margin: 15 }}
                />
            )
        })

    }
});

const AppNavigator = createStackNavigator(
    {
        Login: {
            screen: LoginPage,
            navigationOptions: () => ({
                headerTransparent: true
            
            }),},
        
        SignUp1: { screen: SignUpPage1 },

        SignUp2: { screen: signUpPage2 },

        innerHome: { screen: InnerNavigator }



    },

    {
        initialRouteName: "Login"
    }
);

const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}


