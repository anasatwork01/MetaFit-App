import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import bp from "../../../assets/images/bp.jpg";
import { ms } from "react-native-size-matters";
import Theme from "../../res/Theme";
import AppButton from "../../components/UI/AppButton";

const ExcerciseDetail = () => {
  const selectedExcercise = {
    name: "Bench Press",
    caloriesBurnt: 350,
    steps: [
      "Setup: Lie down on a flat bench with your feet planted firmly on the ground, gripping the barbell slightly wider than shoulder-width apart.",
      "Lower the Bar: Lower the barbell to your chest while inhaling, keeping your elbows at a 45-degree angle from your body.",
      "Press Up: Push the barbell back up to the starting position while exhaling, extending your arms fully but without locking your elbows.",
      "Repeat: Perform the desired number of repetitions, maintaining control and proper form throughout each movement.",
    ],
    image: bp,
  };
  return (
    <View>
      <Image
        source={bp}
        style={{ height: ms(200), alignSelf: "center", width: "100%" }}
      />
      <ScrollView style={{ padding: 20 }}>
        <View style={{ alignItems: "center", padding: 10 }}>
          <Text
            style={{
              color: Theme.light.primary,
              fontWeight: "bold",
              fontSize: ms(15),
            }}
          >
            {selectedExcercise.name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: ms(10),
          }}
        >
          <View>
            <Text style={{ color: Theme.light.text }}>
              Calories Burnt: <Text>{selectedExcercise.caloriesBurnt}</Text>
            </Text>
          </View>
        </View>
        <View>
          <View style={{ alignItems: "center", padding: 10 }}>
            <Text
              style={{
                color: Theme.light.primary,
                fontWeight: "bold",
                fontSize: ms(15),
              }}
            >
              Steps
            </Text>
          </View>
          {selectedExcercise.steps.map((item, index) => (
            <View style={{ marginVertical: ms(5) }}>
              <Text style={{ color: Theme.light.text }}>{`${
                index + 1
              }:  ${item}`}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ExcerciseDetail;
