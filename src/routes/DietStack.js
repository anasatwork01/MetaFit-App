import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Meals from "../screens/Meals/Meals";
import SelectMeals from "../screens/SelectMeals/SelectMeals";
import MealDetail from "../screens/MealDetail/MealDetail";

const Stack = createNativeStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

function DietStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Meals" component={Meals} />
      <Stack.Screen name="Select Meals" component={SelectMeals} />
      <Stack.Screen name="Meal Details" component={MealDetail} />
    </Stack.Navigator>
  );
}

export default DietStack;
