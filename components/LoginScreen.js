import React from 'react';
import { ScrollView, Text, StyleSheet, TextInput } from 'react-native';

export default function LoginScreen() {

    const [text, onChangeEmail] = React.useState('');
    const [number, onChangePassword] = React.useState('');
  

    return (
        <ScrollView style={styles.container} keyboardDismissMode='on-drag'>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            <Text style={styles.regularText}>Login to continue </Text>
            <TextInput
                style={styles.inputBox}
                onChangeText={onChangeEmail}
                value={text}
                placeholder={'First Name'}
                keyboardType='email-address'
            >
            </TextInput>
            <TextInput
                style={styles.inputBox}
                onChangeText={onChangePassword}
                value={number}
                placeholder={'Password'}
                keyboardType='default'
                secureTextEntry={true}
            > 
            </TextInput>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }, 
    headerText: {
      padding: 40,
      fontSize: 30,
      color: '#EDEFEE',
      textAlign: 'center',
    },
    regularText: {
      fontSize: 24,
      padding: 20,
      marginVertical: 8,
      color: '#EDEFEE',
      textAlign: 'center',
    },
    inputBox: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      fontSize: 16,
      borderColor: '#EDEFEE',
      backgroundColor: '#EDEFEE',
    },
  });

