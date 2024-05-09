import { View, Text, Pressable } from "react-native";
import React from "react";
import { ms } from "react-native-size-matters";
import Theme from "../../res/Theme";
import { useNavigation } from "@react-navigation/native";

const AddMeal = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("Select Meals")}>
      <View
        style={{
          width: "100%",
          height: ms(200),
          backgroundColor: Theme.light.white,
          shadowColor: "#252427",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
          marginVertical: 20,
          borderRadius: 20,
          marginBottom: ms(30),
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: Theme.light.text }}>Add today's Meals ..</Text>
      </View>
    </Pressable>
  );
};

export default AddMeal;
