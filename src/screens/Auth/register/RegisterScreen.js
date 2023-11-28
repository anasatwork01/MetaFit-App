import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import React from "react";
import styles from "./styles";
import RegisterForm from "./RegisterForm";
import Images from "../../../res/Images";
import Theme from "../../../res/Theme";
import { ms } from "react-native-size-matters";

const RegisterScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>METAFIT</Text>
            <Text style={styles.headerSubTitle}>Signup</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Create your Account</Text>
          </View>
          <RegisterForm />
          <View style={styles.textContainer}>
            <Text style={styles.textdark}>
              Already have an account?
              <Text
                style={styles.link}
                onPress={() => navigation.navigate("Login")}
              >
                Login
              </Text>
            </Text>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
