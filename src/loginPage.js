import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements'



export default class LoginPage extends Component {


    render() {
        return (


            <View style={styles.container}>
                <Text style={styles.welcome}>BookShare</Text>

                <TextInput style={{
                    height: 40,
                    margin: 20,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                    keyboardType='email-address'
                    placeholder='Enter email address'

                />

                <TextInput style={{
                    height: 40,
                    margin: 20,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 1
                }}

                    placeholder='Enter password'
                    secureTextEntry={true}
                    caretHidden={true}

                />



                <Button buttonStyle={styles.buttonContainer}
                    onPress={() => this.props.navigation.navigate('HomePage')}
                    title="Continue"
                    color="#007FEB"
                    accessibilityLabel="Buy Some Books!"
                />

                <Button buttonStyle={styles.buttonContainer}
                    onPress={() => this.props.navigation.navigate('SignUp1')}
                    type="outline"
                    title="Sign Up"
                    color="#2699FB"
                    accessibilityLabel="Buy Some Books!"
                />





            </View>





        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',

    },
    buttonContainer: {
        margin: 20,
        alignContent: 'flex-end'
    },
    welcome: {
        fontSize: 40,
        textAlignVertical: 'center',
        textAlign: 'center',
        margin: 20
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
