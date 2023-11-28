import { View, Text } from "react-native";
import React, { useState } from "react";
import AppButton from "../../../components/UI/AppButton";
import { AppInput } from "../../../components/UI/AppInput";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const RegisterForm = () => {
  //Hooks
  const navigation = useNavigation();

  //States
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const [age, setAge] = useState();

  //Login Handler Function
  const handleSignup = () => {
    const data = {
      name,
      email,
      password,
      confirmPass,
      age,
    };

    console.log(data);
  };
  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <AppInput placeholder="Full Name" value={name} onChangeText={setName} />
      </View>
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
      <View style={styles.inputContainer}>
        <AppInput
          placeholder="Confirm Your Password"
          value={confirmPass}
          onChangeText={setConfirmPass}
          secureTextEntry
          iconLeft={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppInput
          placeholder="Age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Signup" width="100%" onPress={handleSignup} />
      </View>
    </View>
  );
};

export default RegisterForm;
