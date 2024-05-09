import { View, Text } from "react-native";
import React from "react";
import Theme from "../../res/Theme";
import { ms } from "react-native-size-matters";
import * as Progress from "react-native-progress";
import BarChart from "../../components/Charts/BarChart";

const WeeklyProgress = () => {
  return (
    <View
      style={{
        backgroundColor: Theme.light.white,
        padding: 15,
        borderRadius: 20,
        shadowColor: "#252427",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
      }}
    >
      <Text style={{ color: Theme.light.text }}>Today</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: Theme.light.text,
            fontSize: ms(15),
            fontWeight: "700",
          }}
        >
          Thursday 2 May 2024
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Text
            style={{
              fontSize: ms(30),
              fontWeight: "bold",
              color: Theme.light.secondary,
            }}
          >
            2
          </Text>
          <Text style={{ color: Theme.light.secondary }}>/3 Meals</Text>
        </View>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Progress.Bar
          progress={0.66}
          width={ms(300)}
          color={Theme.light.secondary}
          borderColor={Theme.light.disabled}
        />
      </View>
      <View>
        <BarChart />
      </View>
    </View>
  );
};

export default WeeklyProgress;
