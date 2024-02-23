import React, { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';

import { styles } from './GeneratorStyles';
import GeneratePassword from '../../services/PasswordService';
import * as Clipboard from 'expo-clipboard';

const Generator = () => {

    const [password, setPassword] = useState('password');

    return (
        <View>
            <TextInput
                style={styles.password}
                value={ password } />

            <Pressable 
                onPress={() => setPassword(GeneratePassword)}
                style={styles.button} >
                <Text style={styles.text}> GENERATE </Text> 
            </Pressable>

            <Pressable
                onPress={() => Clipboard.setStringAsync(password)}
                style={styles.button} >
                <Text style={styles.text}> COPY </Text>
            </Pressable>

        </View>
    );
};

export default Generator;