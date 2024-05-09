import React from "react";
import styles from "./styles";
import DonutChart from "../../components/Charts/DonutChart";
import Theme from "../../res/Theme";
import { Text, View } from "react-native";

const ExcerciseStats = () => {
  return (
    <View style={styles.progressCard}>
      <View>
        <Text style={[styles.title, { color: Theme.light.light200 }]}>
          Push Day
        </Text>
        <Text style={[styles.text, { color: Theme.light.light200 }]}>
          2/3 exercises completed
        </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <DonutChart percentage={66} />
      </View>
    </View>
  );
};

export default ExcerciseStats;
