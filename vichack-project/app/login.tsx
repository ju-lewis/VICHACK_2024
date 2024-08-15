import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import React, { useState } from "react";
import styles from "../assets/styles";

export default function LoginScreen() {

    return (
        <LoginBox />       
    );
}


function LoginBox() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin() {
		try{
			const response = await fetch(`http://127.0.0.1:5000/login?username=${username}&password=${password}`);
			console.log(response);
				
			if(response.status === 200) {
				// Route to homepage
			}

		} catch(e){
			console.log("Failed fetch");
			console.log(e);
		}
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


