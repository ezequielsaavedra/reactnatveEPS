import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import React, { useState } from 'react';
import { signIn, signUp } from "../../store/actions/auth.action";

import colors from "../../constants/colors";
import styles from './styles';
import { useDispatch } from "react-redux";

const AuthScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleRegister = () => {
        dispatch(signUp(email, password))
    };

    const handleLogin = () => {
        dispatch(signIn(email, password))
    };

    return (
        <KeyboardAvoidingView
            style={styles.mainContainer}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={50}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                <Text style={styles.title}>Bienvenido</Text>
                        <TextInput
                            style={styles.inputContainer}
                            id="email"
                            label="Email"
                            keyboardType="email-address"
                            required
                            email
                            autoCapitalize="none"
                            errorText="Por favor ingrese un email valido"
                            onChangeText={handleEmailChange}
                            initialValue=""
                            cursorColor={colors.yellowText}
                            keyboardAppearance="dark"
                            placeholder="Email"
                            placeholderTextColor={colors.yellowText}
                        />
                        <TextInput
                            style={styles.inputContainer}
                            id="password"
                            label="Password"
                            keyboardType="default"
                            required
                            password
                            secureTextEntry
                            autoCapitalize="none"
                            errorText="Por favor ingrese una contrasena valida"
                            onChangeText={handlePasswordChange}
                            initialValue=""
                            cursorColor={colors.yellowText}
                            keyboardAppearance="dark"
                            placeholder="Password"
                            placeholderTextColor={colors.yellowText}
                        />
                    <View style={styles.footer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleRegister}
                        >
                            <Text>Registrase</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleLogin}
                        >
                            <Text>Iniciar Sesion</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default AuthScreen;