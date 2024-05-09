import { View, Text, ScrollView } from "react-native";
import React from "react";
import ExcerciseStats from "./ExcerciseStats";
import styles from "./styles";
import WeeklyProgress from "./WeeklyProgress";
import ExcerciseChecklist from "./ExcerciseChecklist";

const ExcerciseScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ExcerciseStats />
      <WeeklyProgress />
      <ExcerciseChecklist />
    </ScrollView>
  );
};

export default ExcerciseScreen;
