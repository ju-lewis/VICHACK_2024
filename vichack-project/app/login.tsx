import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Colors } from "../constants/Colors";

export default function LoginScreen() {

    return (
        <LoginBox />       
    );
}


function LoginBox() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        // 
    }

    return (
        <View style={styles.logInContainer}>
            <Text style={styles.title}>Welcome to {'<'}insert name here{'>'}</Text>
            <Text style={styles.label}>Username or email:</Text>
            <TextInput 
                style={styles.textInput}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />

            <Text style={styles.label}>Password:</Text>
            <TextInput 
                style={styles.textInput}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <Text style={styles.label}>No account? Press <Link href="/" style={{color: "#0000EE"}}>here</Link> to create one.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: Colors.light.text,
        fontSize: 24,
        marginBottom: 10,
    },
    logInContainer: {
        width: '80%',
        height: 400,
        marginHorizontal: 'auto',
        marginVertical: 'auto',
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: Colors.light.backgroundFade,
        borderRadius: 12,
        shadowColor: "#001",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,

        elevation: 4,
    },
    label: {
        marginTop: 4,
        marginBottom: 8,
        marginHorizontal: 12
    },
    textInput: {
        width: '90%',
        marginBottom: 22,
        padding: 8,
        backgroundColor: Colors.light.backgroundInput,
        marginHorizontal: 'auto',
        borderRadius: 4,
        borderColor: Colors.light.borderInput,
        borderWidth: 1,
    },
    button: {
        width: '90%',
        marginHorizontal: 'auto',
        backgroundColor: '#6b79b5',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

