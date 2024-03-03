import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';


export default function Login({ navigation }) {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');


    const goToMainTabs = () => {
        if (id.trim() === '' || password.trim() === '') {
            // If either ID or password is blank, show an alert
            Alert.alert('Error', 'Please fill in both ID and password fields');
        } else {
            // If both ID and password are filled, navigate to MainTabs screen
            navigation.navigate('MainTabs');
        }
    };


    return (
        <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>Facebook</Text>
            </View>

            <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Mobile Number or Email Address'
                    onChangeText={(text) => setId(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                />
            </View>

            <TouchableOpacity style={styles.btn} onPress={goToMainTabs}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn1}>
                <Text style={{ color: '#45a5f5' }}>Forgotten Password?</Text>
            </TouchableOpacity>

            <View style={styles.separator}>
                <Text>or</Text>
            </View>

            <TouchableOpacity style={styles.new} onPress={() => navigation.navigate('CreateAccount')}>
                <Text style={{ color: "white", fontWeight: "bold" }}>Create New Account</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        paddingHorizontal: 20,
    },
    input: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#f2e6f2',
        borderRadius: 10
    },
    text: {
        color: 'blue',
        fontSize: 50,
        fontWeight: "bold"
    },
    textInputContainer: {
        marginTop: 50
    },
    btn: {
        backgroundColor: 'blue',
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        alignItems: "center",
    },
    btn1: {
        alignItems: "center",
        marginVertical: 10
    },
    separator: {
        borderBottomWidth: 1,
        alignItems: 'center',
        marginVertical: 10,
    },
    new: {
        backgroundColor: "green",
        padding: 10,
        marginHorizontal: 50,
        marginVertical: 30,
        alignItems: "center",
        borderRadius: 10
    }
});
