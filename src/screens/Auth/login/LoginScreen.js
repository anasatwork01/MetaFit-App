import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import React from "react";
import styles from "./styles";
import LoginForm from "./LoginForm";
import AppImg from "../../../components/UI/AppImg";
import Images from "../../../res/Images";
import Theme from "../../../res/Theme";
import { FacebookIcon, GoogleIcon } from "../../../res/Icons";

const LoginScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>METAFIT</Text>
          <Text style={styles.headerSubTitle}>Login</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Enter Your Email and Password</Text>
        </View>
        <LoginForm />
        <View style={styles.textContainer}>
          <Text style={styles.textdark}>
            Dont have an account?
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("Register")}
            >
              Sign up
            </Text>
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <AppImg image={Images.line} height={1} />
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontWeight: "700", color: Theme.light.text }}>
              Sign In With
            </Text>
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <AppImg image={Images.line} height={1} />
          </View>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <FacebookIcon />
          </View>
          <View style={styles.icon}>
            <GoogleIcon />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
