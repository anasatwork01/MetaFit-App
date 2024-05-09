import { View, Text } from "react-native";
import React from "react";
import DonutChart from "../../components/Charts/DonutChart";
import { ms } from "react-native-size-matters";
import Theme from "../../res/Theme";
import { CalorieCard } from "../Home/Dashboard";

const nutritions = [
  { type: "Protein", value: 20 },
  { type: "Fats", value: 30 },
  { type: "Carbs", value: 40 },
];

const NutritionCard = ({ type, value }) => {
  return (
    <View
      style={{
        backgroundColor: "#d1deeb",
        borderRadius: 20,
        alignItems: "center",
        padding: 5,
        height: ms(100),
        justifyContent: "space-around",
      }}
    >
      <View>
        <Text>Icon</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{value}</Text>
        <Text>g</Text>
      </View>
      <View>
        <Text style={{ color: Theme.light.text }}>{type}</Text>
      </View>
    </View>
  );
};

const NutritionStats = () => {
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
        flexDirection: "row",
        marginBottom: ms(30),
      }}
    >
      <CalorieCard
        type={"Consumption"}
        percentage={66}
        width="40%"
        color={Theme.light.secondary}
      />
      <View
        style={{
          flex: 3,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {nutritions.map((item) => (
          <NutritionCard type={item.type} value={item.value} />
        ))}
      </View>
    </View>
  );
};

export default NutritionStats;
