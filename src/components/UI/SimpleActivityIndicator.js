import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
function SimpleActivityIndicator() {
  return (
    <View
      style={{
        position: "absolute",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <ActivityIndicator size="large" color="#fff" />
      <Text style={{ color: "#fff" }}>Loading</Text>
    </View>
  );
}

export default SimpleActivityIndicator;
