import { View, Text } from "react-native";
import React, { useState } from "react";
import AppButton from "../../../components/UI/AppButton";
import { AppInput } from "../../../components/UI/AppInput";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { login } from "../../../Store/auth-slice";

const LoginForm = () => {
  //Hooks
  const navigation = useNavigation();
  const dispatch = useDispatch();

  //States
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //Login Handler Function
  const handleLogin = () => {
    const data = {
      email,
      password,
    };
    dispatch(
      login({
        token: "Bearer " + "res.data.access_token",
        refreshToken: "Bearer " + "res.data.refresh_token",
        // user,
        // verified: true,
        // roles: user.roles,
      })
    );

    console.log(data);
  };
  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <AppInput placeholder="Email" value={email} onChangeText={setEmail} />
      </View>
      <View style={styles.inputContainer}>
        <AppInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          iconLeft={true}
        />
      </View>
      <View style={styles.forgetContainer}>
        <Text
          style={styles.forgetText}
          onPress={() => navigation.navigate("Forgot Password")}
        >
          Forgot Password?
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" width="100%" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default LoginForm;
