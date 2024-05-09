import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { ms } from "react-native-size-matters";
import Theme from "../../res/Theme";
import bp from "../../../assets/images/bp.jpg";
import sp from "../../../assets/images/sp.jpg";
import td from "../../../assets/images/td.jpg";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";

const ExcerciseChecklist = () => {
  const [isCheckedOne, setCheckedOne] = useState(false);
  const [isCheckedTwo, setCheckedTwo] = useState(false);
  const [isCheckedThree, setCheckedThree] = useState(false);
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: "100%",
        backgroundColor: Theme.light.white,
        shadowColor: "#252427",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        marginVertical: 20,
        borderRadius: 20,
        marginBottom: ms(40),
        padding: 20,
      }}
    >
      <View>
        <Text style={{ color: Theme.light.text, fontWeight: "bold" }}>
          Todays Excercises
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderWidth: 1,
          padding: ms(10),
          borderRadius: 10,
          marginVertical: ms(10),
          borderColor: Theme.light.disabled,
        }}
      >
        <View>
          <Image
            source={bp}
            style={{ height: ms(50), width: ms(50), alignSelf: "center" }}
          />
        </View>
        <Pressable onPress={() => navigation.navigate("Excercise Details")}>
          <View style={{ justifyContent: "space-around" }}>
            <Text>Barbell Bench Press</Text>
            <Text>Calories Burnt: 150</Text>
          </View>
        </Pressable>
        <View style={{ justifyContent: "center" }}>
          <Checkbox
            style={{}}
            value={isCheckedOne}
            onValueChange={setCheckedOne}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderWidth: 1,
          padding: ms(10),
          borderRadius: 10,
          marginVertical: ms(10),
          borderColor: Theme.light.disabled,
        }}
      >
        <View>
          <Image
            source={sp}
            style={{ height: ms(50), width: ms(50), alignSelf: "center" }}
          />
        </View>
        <View style={{ justifyContent: "space-around" }}>
          <Text>Dumbbell Shoulder Press</Text>
          <Text>Calories Burnt: 120</Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Checkbox
            style={{}}
            value={isCheckedTwo}
            onValueChange={setCheckedTwo}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderWidth: 1,
          padding: ms(10),
          borderRadius: 10,
          marginVertical: ms(10),
          borderColor: Theme.light.disabled,
        }}
      >
        <View>
          <Image
            source={td}
            style={{ height: ms(50), width: ms(50), alignSelf: "center" }}
          />
        </View>
        <View style={{ justifyContent: "space-around" }}>
          <Text>Tricep Dips</Text>
          <Text>Calories Burnt: 130</Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Checkbox
            style={{}}
            value={isCheckedThree}
            onValueChange={setCheckedThree}
          />
        </View>
      </View>
    </View>
  );
};

export default ExcerciseChecklist;
