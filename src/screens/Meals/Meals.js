import { View, Text, ScrollView } from "react-native";
import React from "react";
import NutritionStats from "./NutritionStats";
import WeeklyProgress from "./WeeklyProgress";
import AddMeal from "./AddMeal";
import MealsChecklist from "./MealsChecklist";

const Meals = () => {
  const isMealSelected = true;
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <NutritionStats />
      <WeeklyProgress />
      {isMealSelected ? <MealsChecklist /> : <AddMeal />}
    </ScrollView>
  );
};

export default Meals;
