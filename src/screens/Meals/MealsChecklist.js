import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { ms } from "react-native-size-matters";
import Theme from "../../res/Theme";
import food from "../../../assets/images/food.jpg";
import ob from "../../../assets/images/ob.jpg";
import Checkbox from "expo-checkbox";

const MealsChecklist = () => {
  const [isCheckedOne, setCheckedOne] = useState(false);
  const [isCheckedTwo, setCheckedTwo] = useState(false);
  const [isCheckedThree, setCheckedThree] = useState(false);

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
          Todays Meals
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
            source={ob}
            style={{ height: ms(50), width: ms(50), alignSelf: "center" }}
          />
        </View>
        <View style={{ justifyContent: "space-around" }}>
          <Text>Oatmeal with Berries and Nuts</Text>
          <Text>Calories: 300</Text>
        </View>
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
            source={food}
            style={{ height: ms(50), width: ms(50), alignSelf: "center" }}
          />
        </View>
        <View style={{ justifyContent: "space-around" }}>
          <Text>Grilled Chicken</Text>
          <Text>Calories: 300</Text>
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
            source={food}
            style={{ height: ms(50), width: ms(50), alignSelf: "center" }}
          />
        </View>
        <View style={{ justifyContent: "space-around" }}>
          <Text>Baked Lemon Herb Chicken Breast</Text>
          <Text>Calories: 300</Text>
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

export default MealsChecklist;
